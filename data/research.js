/* ============================== RESEARCH ==============================
   Drafted from your CV and publication record — rewrite freely, this page
   should sound like you.
   ===================================================================== */
window.RESEARCH = {
  intro: "I work on the mathematics of how physiological systems talk to each other. The heart, the lungs, the vasculature and the brain do not act independently: they exchange information continuously, and the structure of that exchange changes with posture, with stress, with sleep, and with disease. My work develops multivariate time series methods — in the time, frequency and information domains — that measure those interactions from recorded signals, and applies them to cardiovascular, cardiorespiratory and brain–heart data, including recordings from neurocritical care.",

  themes: [
    {
      title: "Decomposing information in physiological networks",
      body:  "Measures such as transfer entropy or the mutual information rate give a single number for how much two signals share. That number hides structure: information can be transferred, stored, or modified, and several sources can contribute redundantly or synergistically. I develop decompositions — in the time and frequency domains — that separate these contributions, so a change in coupling can be attributed to a specific mechanism rather than to coupling in general."
    },
    {
      title: "High-order interactions beyond pairs",
      body:  "Most network physiology is still built on pairwise links, but physiological regulation involves groups of variables acting together. My recent work develops sequential, information-theoretic procedures that identify which groups of signals in a high-dimensional network genuinely interact at high order, without enumerating every possible subset — and asks what those interactions mean for cardiovascular and respiratory control under stress."
    },
    {
      title: "Long-range correlations and multiple time scales",
      body:  "Heart period, blood pressure and respiration are not short-memory processes: they carry correlations that decay slowly, across scales from a single beat to several minutes. Analyses that ignore this bias the estimates. I use fractionally integrated vector autoregressive (VARFI) models to represent short- and long-range dynamics together, which keeps information measures well defined at every scale of interest."
    },
    {
      title: "Estimation from short and noisy recordings",
      body:  "Clinical recordings are short, non-stationary and noisy — exactly where information estimators fail quietly. Part of my work is about making these measures usable on real data: estimators for short time series from coupled dynamic systems, surrogate-data tests that separate genuine nonlinearity and dynamic correlation from artefacts of the estimator, and unified frameworks that relate time-domain, spectral and information-theoretic quantities to one another."
    },
    {
      title: "Neurocritical care and acute brain injury",
      body:  "With colleagues in intensive care I apply these methods to plateau waves of intracranial pressure — episodes of sustained pressure elevation in brain-injured patients. Decomposing the information shared between intracranial pressure, blood pressure, heart period and end-tidal CO₂ during these episodes characterises the autonomic response and how cerebral autoregulation is engaged."
    },
    {
      title: "Brain signals and beyond",
      body:  "TODO: this is where your Ghent work belongs — EEG, cognition, whatever the postdoc is actually about. I have left it as a placeholder rather than guess. The same methods also travel outside physiology: recent work applies mutual information rate decomposition to causal dependencies between climate indices."
    }
  ],

  // TODO: if you release code for any of the methods above, list it here.
  // Set to [] to hide the section entirely.
  software: []
};
