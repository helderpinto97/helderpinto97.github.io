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
      where: "Department of General & Applied Psychology, Ghent University",
      note:  "In Prof. Daniele Marinazzo’s group. Higher-order information decomposition of EEG in stroke recovery, funded by FWO grant G080526N"
    },
    {
      years: "2022 – 2025",
      what:  "PhD Research Fellow",
      where: "Centre of Mathematics, Universidade do Porto (CMUP)",
      note:  "FCT studentship 2022.11423.BD. Supervisors: Prof. Ana Paula Rocha (FCUP) and Prof. Luca Faes (University of Palermo)"
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
      note:  "High-order dynamical interactions in complex network systems: information-theoretic and parametric modeling approaches · Supervisors: Prof. Ana Paula Rocha, Prof. Luca Faes"
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
      years: "2026 – present",
      what:  "FWO project grant (G080526N)",
      where: "Research Foundation – Flanders",
      note:  "Supports the current postdoctoral work"
    },
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
    {
      years: "Peer review",
      what:  "Reviewer, Physiological Measurement",
      where: "",
      note:  "Four verified reviews recorded on Web of Science (ResearcherID ADW-5635-2022)"
    }
    // TODO: committees, organising roles, other journals not recorded on WoS.
  ],

  skills: [
    { years: "Methods",   what: "Information decomposition, transfer entropy, mutual information rate, high-order interactions, VARFI and long-memory modelling, surrogate data analysis, spectral and time–frequency analysis", where: "", note: "" },
    { years: "Domains",   what: "Network physiology, cardiovascular and cardiorespiratory variability, brain–heart interactions, multimodal neuromonitoring, intracranial pressure", where: "", note: "" },
    { years: "Software",  what: "MATLAB, Python, R", where: "", note: "" },
    { years: "Languages", what: "Portuguese (native), English (fluent)", where: "", note: "" }
  ]
};
