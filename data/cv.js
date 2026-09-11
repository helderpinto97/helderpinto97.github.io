/* ===================== EDUCATION / POSITIONS / AWARDS =================
   Source: CV_HelderPinto.pdf.

   Deliberately NOT included, because this page is public: home address,
   phone number, and date of birth. Add them only if you mean to.
   ===================================================================== */
window.CV = {
  // Export your LaTeX CV to assets/CV.pdf and set this to "assets/CV.pdf"
  // to show a download button at the top of the page.
  pdf: null,

  positions: [
    {
      years: "2026 – present",
      what:  "Postdoctoral Researcher",
      where: "Department of Applied & General Psychology, Ghent University",
      note:  "TODO: one line on what the postdoc is about."
    },
    {
      years: "2022 – 2025",
      what:  "PhD Research Fellow",
      where: "Centre of Mathematics, Universidade do Porto (CMUP)",
      note:  "FCT studentship 2022.11423.BD — supervisors Ana Paula Rocha (FCUP) and Luca Faes (UNIPA)"
    },
    {
      years: "2021 – 2022",
      what:  "MSc & PhD Research Fellow",
      where: "CMUP, Universidade do Porto",
      note:  "Project “Cardiovascular Variability Analysis” (UIDP/MAT/00144/2020)"
    },
    {
      years: "2021",
      what:  "First Degree Research Fellow",
      where: "CMUP, Universidade do Porto",
      note:  "Project “Cardiovascular Variability Analysis” (UIDB/MAT/00144/2020)"
    }
  ],

  education: [
    {
      years: "2021 – 2026",
      what:  "PhD in Applied Mathematics",
      where: "Faculdade de Ciências, Universidade do Porto (MAP-PDMA)",
      note:  "High-order dynamical interactions in complex network systems: information-theoretic and parametric modeling approaches · Supervisors: Ana Paula Rocha, Luca Faes"
    },
    {
      years: "2019 – 2021",
      what:  "MSc in Mathematical Engineering",
      where: "Faculdade de Ciências, Universidade do Porto",
      note:  "Complexity analysis of cardiovascular variability: application to autonomic stress and critical illness · 19/20, dissertation 20/20"
    },
    {
      years: "2015 – 2019",
      what:  "BSc in Mathematics",
      where: "Faculdade de Ciências, Universidade do Porto",
      note:  ""
    }
  ],

  awards: [
    {
      years: "2022 – 2025",
      what:  "FCT Doctoral Studentship (2022.11423.BD)",
      where: "Fundação para a Ciência e a Tecnologia",
      note:  "High-order dynamical interactions in complex network systems"
    },
    {
      years: "2021",
      what:  "Best Student, MSc in Mathematical Engineering",
      where: "Faculdade de Ciências, Universidade do Porto",
      note:  "2020/2021 academic year"
    }
  ],

  service: [
    // TODO: journals you review for, committees, organising roles.
  ],

  skills: [
    { years: "Methods",   what: "Information decomposition, transfer entropy, mutual information rate, high-order interactions, VARFI and long-memory modelling, surrogate data analysis, spectral and time–frequency analysis", where: "", note: "" },
    { years: "Domains",   what: "Network physiology, cardiovascular and cardiorespiratory variability, brain–heart interactions, multimodal neuromonitoring, intracranial pressure", where: "", note: "" },
    { years: "Software",  what: "MATLAB, Python, R", where: "", note: "TODO: adjust to what you actually use" },
    { years: "Languages", what: "Portuguese (native), English (fluent)", where: "", note: "TODO: add others if relevant" }
  ]
};
