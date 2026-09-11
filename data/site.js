/* =====================================================================
   EDIT ME — everything about you lives here.
   ===================================================================== */
window.SITE = {
  name:        "Hélder Pinto",
  role:        "Postdoctoral Researcher",
  affiliation: "Department of General & Applied Psychology, Ghent University",
  location:    "Ghent, Belgium",

  // The one address the whole site uses — footer, Contact page, and the
  // Email link below. Change it here only.
  email:       "helderarmando.goncalvespinto@ugent.be",

  siteTitle:   "Hélder Pinto",

  // Used to bold your name in author lists. Crossref records you both with
  // and without the accent, so both spellings are here.
  nameVariants: ["Hélder Pinto", "Helder Pinto", "H. Pinto", "Pinto, H."],

  // Drop a square photo at assets/portrait.jpg, or set to null to hide it.
  portrait: "assets/portrait.jpg",

  links: [
    { label: "ORCID",          href: "https://orcid.org/0000-0002-0455-6466" },
    { label: "Scopus",         href: "https://www.scopus.com/authid/detail.uri?authorId=57404559300" },
    { label: "GitHub",         href: "https://github.com/helderpinto97" },
    { label: "Web of Science", href: "https://www.webofscience.com/wos/author/record/ADW-5635-2022" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=tEPGynMAAAAJ&hl=en" }
  ]
};

// The Email pill is built from SITE.email above, so there is only ever one
// address to keep current. Delete this line if you would rather not show it.
window.SITE.links.push({ label: "Email", href: "mailto:" + window.SITE.email });
