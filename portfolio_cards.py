"""Builds the homepage project grid from the assignment pages.

Drop `<!-- PROJECT_CARDS -->` into any page and it is replaced at build time
with one card per assignment folder under docs/assignments/.

Each card takes:
  title      the assignment page's first `# ` heading
  thumbnail  the first image the page references, else the first image file
             sitting in that assignment's folder
  date /     read from the optional YAML front matter at the top of the
  hours /    assignment page, e.g.
  skills         ---
                 date: 24 August 2026
                 hours: 16
                 skills: Teardown analysis, technical writing
                 thumbnail: Listing Image.jpg
                 ---

  `thumbnail:` is optional; without it the first image on the page is used.

Anything missing simply renders as "not started" — no assignment needs to be
filled in before the homepage will build.
"""

import os
import re
from html import escape
from urllib.parse import quote

TOKEN = "<!-- PROJECT_CARDS -->"
IMAGE_EXT = (".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg")


def _front_matter(text):
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n", text, re.S)
    if not m:
        return {}, text
    meta = {}
    for line in m.group(1).split("\n"):
        if ":" in line:
            k, v = line.split(":", 1)
            meta[k.strip().lower()] = v.strip()
    return meta, text[m.end():]


def _title(body, fallback):
    m = re.search(r"^#\s+(.+)$", body, re.M)
    return m.group(1).strip() if m else fallback


def _thumbnail(meta, body, folder):
    chosen = meta.get("thumbnail", "").strip()
    if chosen:
        return quote(chosen)

    for m in re.finditer(r'(?:!\[[^\]]*\]\(([^)\s]+)\)|<img[^>]+src="([^"]+)")', body):
        src = m.group(1) or m.group(2)
        if src.lower().endswith(IMAGE_EXT) and "://" not in src:
            return src
    for name in sorted(os.listdir(folder)):
        if name.lower().endswith(IMAGE_EXT):
            return quote(name)
    return None


def _split_code(title):
    m = re.match(r"^(A\d+)\s*[–—-]\s*(.+)$", title)
    return (m.group(1), m.group(2)) if m else ("", title)


def _cards(docs_dir):
    root = os.path.join(docs_dir, "assignments")
    if not os.path.isdir(root):
        return ""

    out = ['<div class="project-grid">']
    for name in sorted(os.listdir(root), key=lambda s: s.lower()):
        folder = os.path.join(root, name)
        page = os.path.join(folder, "index.md")
        if not os.path.isfile(page):
            continue

        with open(page, encoding="utf-8") as fh:
            meta, body = _front_matter(fh.read())

        title = _title(body, name)
        code, label = _split_code(title)
        href = "assignments/%s/" % quote(name)
        thumb = _thumbnail(meta, body, folder)

        rows = []
        for field, key in (("Completed", "date"), ("Time spent", "hours"),
                           ("Practiced", "skills")):
            value = meta.get(key, "").strip()
            if key == "hours" and value:
                value = "%s hours" % value
            if value:
                rows.append("<tr><th>%s</th><td>%s</td></tr>"
                            % (field, escape(value)))
        if not rows:
            rows.append('<tr><td class="project-empty">Not started yet</td></tr>')

        if thumb:
            media = ('<img src="assignments/%s/%s" alt="" loading="lazy">'
                     % (quote(name), thumb))
        else:
            media = '<span class="project-placeholder">%s</span>' % escape(code or "—")

        out.append(
            '<a class="project-card" href="%s">'
            '<span class="project-thumb">%s</span>'
            '<span class="project-label"><b>%s</b>%s</span>'
            '<span class="project-meta"><table>%s</table></span>'
            "</a>" % (href, media, escape(code or title),
                      escape(label) if code else "", "".join(rows))
        )
    out.append("</div>")
    return "\n".join(out)


def on_page_markdown(markdown, page, config, files, **kwargs):
    if TOKEN not in markdown:
        return markdown
    return markdown.replace(TOKEN, _cards(config["docs_dir"]))
