/* Shared chrome + renderers. No dependencies, no build step. */
(function () {
  "use strict";

  var S = window.SITE || {};
  var PAGES = [
    ["index.html",        "About"],
    ["publications.html", "Publications"],
    ["research.html",     "Research"],
    ["teaching.html",     "Teaching"],
    ["talks.html",        "Talks"],
    ["cv.html",           "CV"],
    ["contact.html",      "Contact"]
  ];

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function here() {
    var p = location.pathname.split("/").pop();
    return p === "" ? "index.html" : p;
  }

  /* ---------- theme ---------- */
  function initTheme(btn) {
    var saved = null;
    try { saved = localStorage.getItem("theme"); } catch (e) {}
    if (saved === "dark" || saved === "light") {
      document.documentElement.setAttribute("data-theme", saved);
    }
    function current() {
      var attr = document.documentElement.getAttribute("data-theme");
      if (attr) return attr;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    function paint() { btn.textContent = current() === "dark" ? "☀" : "☾"; }
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      paint();
    });
    paint();
  }

  /* ---------- header / footer ---------- */
  function chrome() {
    var cur = here();

    var head = el("header", "site-head");
    var w = el("div", "wrap");
    var brand = el("a", "brand", esc(S.name || "Home"));
    brand.href = "index.html";
    w.appendChild(brand);

    var nav = el("nav", "main");
    PAGES.forEach(function (p) {
      var a = el("a", null, p[1]);
      a.href = p[0];
      if (p[0] === cur) a.setAttribute("aria-current", "page");
      nav.appendChild(a);
    });
    w.appendChild(nav);

    var btn = el("button", "theme-toggle");
    btn.type = "button";
    btn.setAttribute("aria-label", "Toggle dark mode");
    w.appendChild(btn);

    head.appendChild(w);
    document.body.insertBefore(head, document.body.firstChild);
    initTheme(btn);

    var foot = el("footer");
    var fw = el("div", "wrap");
    fw.appendChild(el("div", null, "© " + new Date().getFullYear() + " " + esc(S.name || "")));
    fw.appendChild(el("div", null, S.email
      ? '<a href="mailto:' + esc(S.email) + '">' + esc(S.email) + "</a>"
      : ""));
    foot.appendChild(fw);
    document.body.appendChild(foot);

    document.title = (document.title ? document.title + " · " : "") + (S.siteTitle || S.name || "");
  }

  /* ---------- home ---------- */
  function renderHome(root) {
    var hero = el("div", "hero");
    if (S.portrait) {
      var img = el("img", "portrait");
      img.src = S.portrait;
      img.alt = S.name || "";
      img.onerror = function () { img.remove(); };
      hero.appendChild(img);
    }
    var intro = el("div", "intro");
    intro.appendChild(el("h1", null, esc(S.name || "")));
    var aff = [S.role, S.affiliation, S.location].filter(Boolean).map(esc).join("<br>");
    intro.appendChild(el("p", "affil", aff));

    var ul = el("ul", "links");
    (S.links || []).forEach(function (l) {
      var li = el("li");
      var a = el("a", null, esc(l.label));
      a.href = l.href;
      if (!/^mailto:/.test(l.href)) { a.target = "_blank"; a.rel = "noopener"; }
      li.appendChild(a);
      ul.appendChild(li);
    });
    intro.appendChild(ul);
    hero.appendChild(intro);
    root.insertBefore(hero, root.firstChild);
  }

  /* ---------- publications ---------- */
  var TYPE_LABEL = {
    journal: "Journal articles",
    conference: "Conference papers",
    chapter: "Book chapters",
    preprint: "Preprints",
    submitted: "Under submission",
    thesis: "Thesis"
  };

  function isMe(author) {
    var variants = S.nameVariants || [S.name];
    var a = String(author).toLowerCase().replace(/[.,\s]/g, "");
    return variants.some(function (v) {
      return String(v).toLowerCase().replace(/[.,\s]/g, "") === a;
    });
  }

  function authorList(authors) {
    return (authors || []).map(function (a) {
      return isMe(a) ? '<span class="me">' + esc(a) + "</span>" : esc(a);
    }).join(", ");
  }

  function pubNode(p) {
    var li = el("li", "pub");
    var href = p.doi ? "https://doi.org/" + p.doi : (p.url || p.pdf || null);
    var title = esc(p.title);
    li.appendChild(el("span", "title",
      (href ? '<a href="' + esc(href) + '" target="_blank" rel="noopener">' + title + "</a>" : title) +
      (p.note ? '<span class="tag">' + esc(p.note) + "</span>" : "")
    ));
    li.appendChild(el("div", "authors", authorList(p.authors)));
    var venue = [p.venue, p.volume].filter(Boolean).map(esc).join(", ");
    if (venue) li.appendChild(el("div", "venue", venue + " (" + esc(p.year) + ")"));

    var meta = el("div", "meta");
    var bits = "";
    if (p.doi)  bits += '<a href="https://doi.org/' + esc(p.doi) + '" target="_blank" rel="noopener">doi</a>';
    if (p.pdf)  bits += '<a href="' + esc(p.pdf) + '" target="_blank" rel="noopener">pdf</a>';
    if (p.code) bits += '<a href="' + esc(p.code) + '" target="_blank" rel="noopener">code</a>';
    if (p.data) bits += '<a href="' + esc(p.data) + '" target="_blank" rel="noopener">data</a>';
    if (bits) { meta.innerHTML = bits; li.appendChild(meta); }
    return li;
  }

  function renderPublications(root) {
    var pubs = (window.PUBLICATIONS || []).slice();

    // Filter pills follow TYPE_LABEL order, not the order entries happen to
    // appear in, so adding a paper never reshuffles the controls.
    var present = {};
    pubs.forEach(function (p) { present[p.type] = true; });
    var types = Object.keys(TYPE_LABEL).filter(function (t) { return present[t]; });
    pubs.forEach(function (p) { if (types.indexOf(p.type) < 0) types.push(p.type); });

    var bar = el("div", "pub-controls");
    var list = el("div");
    var filters = [["all", "All"]].concat(types.map(function (t) {
      return [t, TYPE_LABEL[t] || t];
    }));

    function draw(filter) {
      list.innerHTML = "";
      var shown = pubs.filter(function (p) { return filter === "all" || p.type === filter; });
      if (!shown.length) { list.appendChild(el("p", "empty", "Nothing here yet.")); return; }
      var years = [];
      shown.forEach(function (p) { if (years.indexOf(p.year) < 0) years.push(p.year); });
      years.sort(function (a, b) { return b - a; });
      years.forEach(function (y) {
        list.appendChild(el("div", "year-head", esc(y)));
        var ol = el("ol", "pubs");
        shown.filter(function (p) { return p.year === y; }).forEach(function (p) {
          ol.appendChild(pubNode(p));
        });
        list.appendChild(ol);
      });
    }

    filters.forEach(function (f, i) {
      var b = el("button", null, esc(f[1]));
      b.type = "button";
      b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      b.addEventListener("click", function () {
        var all = bar.querySelectorAll("button");
        for (var j = 0; j < all.length; j++) all[j].setAttribute("aria-pressed", "false");
        b.setAttribute("aria-pressed", "true");
        draw(f[0]);
      });
      bar.appendChild(b);
    });

    root.appendChild(bar);
    root.appendChild(list);
    draw("all");
  }

  /* ---------- simple entry lists ---------- */
  function entryNode(e) {
    var n = el("div", "entry");
    if (e.date || e.kind) {
      n.appendChild(el("div", "when", [e.date, e.kind].filter(Boolean).map(esc).join(" · ")));
    }
    var what = esc(e.title);
    if (e.link) what = '<a href="' + esc(e.link) + '" target="_blank" rel="noopener">' + what + "</a>";
    n.appendChild(el("div", "what", what));
    if (e.where) n.appendChild(el("div", "where", esc(e.where)));
    if (e.note)  n.appendChild(el("p", null, esc(e.note)));
    return n;
  }

  function renderEntries(root, items) {
    if (!items || !items.length) {
      root.appendChild(el("p", "empty", "Nothing here yet."));
      return;
    }
    items.forEach(function (e) { root.appendChild(entryNode(e)); });
  }

  /* ---------- cv ---------- */
  function cvBlock(root, heading, rows) {
    if (!rows || !rows.length) return;
    root.appendChild(el("h2", null, esc(heading)));
    rows.forEach(function (r) {
      var row = el("div", "cv-row");
      row.appendChild(el("div", "years", esc(r.years)));
      var body = el("div", "body");
      body.appendChild(el("strong", null, esc(r.what)));
      var sub = [r.where, r.note].filter(Boolean).map(esc).join(" — ");
      if (sub) body.appendChild(el("span", null, sub));
      row.appendChild(body);
      root.appendChild(row);
    });
  }

  function renderCV(root) {
    var cv = window.CV || {};
    if (cv.pdf) {
      var ul = el("ul", "links");
      var li = el("li");
      var a = el("a", null, "Download CV (PDF)");
      a.href = cv.pdf;
      a.target = "_blank";
      a.rel = "noopener";
      li.appendChild(a);
      ul.appendChild(li);
      root.appendChild(ul);
    }
    cvBlock(root, "Education", cv.education);
    cvBlock(root, "Positions", cv.positions);
    cvBlock(root, "Awards & grants", cv.awards);
    cvBlock(root, "Service", cv.service);
    cvBlock(root, "Skills", cv.skills);
  }

  /* ---------- research ---------- */
  function renderResearch(root) {
    var R = window.RESEARCH || {};
    if (R.intro) root.appendChild(el("p", "lede", esc(R.intro)));
    (R.themes || []).forEach(function (t) {
      root.appendChild(el("h2", null, esc(t.title)));
      root.appendChild(el("p", null, esc(t.body)));
    });
    if (R.software && R.software.length) {
      root.appendChild(el("h2", null, "Software & data"));
      var cards = el("div", "cards");
      R.software.forEach(function (s) {
        var c = el("div", "card");
        c.appendChild(el("h3", null, s.href
          ? '<a href="' + esc(s.href) + '" target="_blank" rel="noopener">' + esc(s.name) + "</a>"
          : esc(s.name)));
        c.appendChild(el("p", null, esc(s.body)));
        cards.appendChild(c);
      });
      root.appendChild(cards);
    }
  }

  /* ---------- teaching ---------- */
  function renderTeaching(root) {
    var T = window.TEACHING || {};
    if (T.intro) root.appendChild(el("p", "lede", esc(T.intro)));
    if (T.courses && T.courses.length) {
      root.appendChild(el("h2", null, "Courses"));
      renderEntries(root, T.courses);
    }
    if (T.supervision && T.supervision.length) {
      root.appendChild(el("h2", null, "Student supervision"));
      renderEntries(root, T.supervision);
    }
  }

  /* ---------- contact ---------- */
  function renderContact(root) {
    var rows = [];
    if (S.email) {
      rows.push(["Email", '<a href="mailto:' + esc(S.email) + '">' + esc(S.email) + "</a>"]);
    }
    if (S.affiliation) {
      rows.push(["Address", esc(S.affiliation) + (S.location ? "<br>" + esc(S.location) : "")]);
    }
    rows.forEach(function (r) {
      var row = el("div", "cv-row");
      row.appendChild(el("div", "years", r[0]));
      row.appendChild(el("div", "body", r[1]));
      root.appendChild(row);
    });
    var ul = el("ul", "links");
    (S.links || []).forEach(function (l) {
      if (/^mailto:/.test(l.href)) return;
      var li = el("li");
      var a = el("a", null, esc(l.label));
      a.href = l.href;
      a.target = "_blank";
      a.rel = "noopener";
      li.appendChild(a);
      ul.appendChild(li);
    });
    root.appendChild(ul);
  }

  /* ---------- boot ---------- */
  var RENDERERS = {
    home:         renderHome,
    publications: renderPublications,
    research:     renderResearch,
    teaching:     renderTeaching,
    talks:        function (r) { renderEntries(r, window.TALKS); },
    cv:           renderCV,
    contact:      renderContact
  };

  document.addEventListener("DOMContentLoaded", function () {
    chrome();
    var root = document.querySelector("[data-render]");
    if (!root) return;
    var fn = RENDERERS[root.getAttribute("data-render")];
    if (fn) fn(root);
  });
})();
