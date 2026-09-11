/* ============================== RESEARCH ==============================
   Drafted from your publication record — rewrite freely, it should sound
   like you.
   ===================================================================== */
window.RESEARCH = {
  intro: "I work on the mathematics of how physiological systems talk to each other. The heart, the lungs, the vasculature and the brain do not act independently: they exchange information continuously, and the structure of that exchange changes with posture, with stress, and with disease. My work builds information-theoretic tools that measure those interactions from recorded time series, and applies them to cardiovascular, cardiorespiratory and brain–heart data.",

  themes: [
    {
      title: "Decomposing information in physiological networks",
      body:  "Measures such as transfer entropy or the mutual information rate give a single number for how much two signals share. That number hides structure: information can be transferred, stored, or modified, and several sources can contribute redundantly or synergistically. I develop decompositions — in the time and frequency domains — that separate these contributions, so that a change in coupling can be attributed to a specific mechanism rather than to coupling in general."
    },
    {
      title: "Long-range correlations and multiple time scales",
      body:  "Heart period, blood pressure and respiration are not short-memory processes: they carry correlations that decay slowly, across scales from a beat to several minutes. Analyses that ignore this bias the estimates. I use fractionally integrated vector autoregressive (VARFI) models to represent short- and long-range dynamics together, which makes information measures well defined at every scale of interest."
    },
    {
      title: "High-order interactions beyond pairs",
      body:  "Most network physiology is still built on pairwise links, but physiological regulation involves groups of variables acting together. Recent work develops sequential, information-theoretic procedures that find which groups of signals in a high-dimensional network genuinely interact at high order, without enumerating every possible subset."
    },
    {
      title: "Estimation from short and noisy recordings",
      body:  "Clinical recordings are short, non-stationary and noisy, which is exactly where information estimators fail quietly. Part of my work is about making these measures usable on real data: estimators for short time series from coupled dynamic systems, and surrogate-data tests that separate genuine nonlinearity and dynamic correlation from artefacts of the estimator."
    },
    {
      title: "Clinical application: neurocritical care",
      body:  "With colleagues in intensive care I apply these methods to plateau waves of intracranial pressure — episodes of sustained pressure elevation in brain-injured patients. Information decomposition of the pressure, blood pressure and heart period signals during these episodes characterises the autonomic response and how cerebral autoregulation is engaged."
    }
  ],

  // TODO: if you release code for any of the methods above, list it here.
  // Set to [] to hide the section entirely.
  software: []
};
