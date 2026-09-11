/* ============================== RESEARCH ==============================
   Rewrite freely. This page should sound like you.
   ===================================================================== */
window.RESEARCH = {
  intro: "I study how the heart, lungs, vasculature and brain exchange information, and how that exchange shifts under stress, during sleep, and in disease. The tools come from multivariate time series analysis and information theory. I build estimators that work in the time, frequency and information domains, then apply them to cardiovascular, cardiorespiratory and brain-heart recordings, including data from neurocritical care.",

  themes: [
    {
      title: "Decomposing information in physiological networks",
      body:  "Transfer entropy and the mutual information rate give one number for how much two signals share. That number hides structure. Information can be transferred, stored or modified, and several sources can each contribute a redundant or synergistic part of it. I build decompositions in the time and frequency domains that separate those contributions, so a change in coupling points to a mechanism instead of to coupling in general."
    },
    {
      title: "High-order interactions beyond pairs",
      body:  "Most network physiology still rests on pairwise links, while physiological regulation involves groups of variables acting together. I develop sequential procedures that find which groups of signals in a high-dimensional network genuinely interact at high order, without enumerating every possible subset. The harder question is what those interactions mean for cardiovascular and respiratory control under stress."
    },
    {
      title: "Long-range correlations and multiple time scales",
      body:  "Heart period, blood pressure and respiration carry correlations that decay slowly, across scales from a single beat to several minutes. Analyses built on short-memory models bias the estimates. I use fractionally integrated vector autoregressive (VARFI) models to represent short- and long-range dynamics together, which keeps information measures well defined at every scale of interest."
    },
    {
      title: "Estimation from short and noisy recordings",
      body:  "Clinical recordings are short, non-stationary and noisy. Information estimators tend to fail on exactly this kind of data, and to fail without announcing it. Part of my work is making these measures usable: estimators for short time series from coupled dynamic systems, surrogate-data tests that separate genuine nonlinearity from artefacts of the estimator, and frameworks that relate time-domain, spectral and information-theoretic quantities to one another."
    },
    {
      title: "Neurocritical care and acute brain injury",
      body:  "With colleagues in intensive care I apply these methods to plateau waves of intracranial pressure, episodes of sustained pressure elevation in brain-injured patients. Decomposing the information shared between intracranial pressure, blood pressure, heart period and end-tidal CO₂ during these episodes shows how the autonomic response behaves and how cerebral autoregulation is engaged."
    },
    {
      title: "Does synergy track recovery after stroke?",
      body:  "My current project, in Daniele Marinazzo's group at Ghent and with Claus Hilgetag in Hamburg, asks whether higher-order structure in EEG tracks recovery after ischemic stroke. Functional connectivity has been proposed as a prognostic marker for decades, yet a recent systematic review found no consistent pattern. Connectivity is pairwise, so it cannot see structure that emerges only from the joint distribution of three or more sources. Using the O-information and its local, gradient and spectral forms, I am testing whether the balance between synergy and redundancy shifts from the acute to the chronic stage, and whether that shift follows motor and cognitive recovery. The analysis runs across several stroke cohorts: acute EEG from Hamburg, chronic data from Dallas, and high-density EEG from IRCCS San Camillo, with further data through EBRAINS. Funded by the Research Foundation, Flanders."
    },
    {
      title: "Methods that travel",
      body:  "These tools apply outside physiology. Recent work uses mutual information rate decomposition on causal dependencies between climate indices, which tests whether a method measures what it claims or merely suits the data it grew up on."
    }
  ],

  // TODO: if you release code for any of the methods above, list it here.
  // Set to [] to hide the section entirely.
  software: []
};
