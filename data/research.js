/* ============================== RESEARCH ==============================
   Rewrite freely. This page should sound like you.
   ===================================================================== */
window.RESEARCH = {
  intro: "I study how the heart, lungs, vasculature and brain exchange information, and how that exchange shifts under stress, during sleep, and in disease. The tools come from multivariate time series analysis and information theory. I build estimators that work in the time, frequency and information domains, then apply them to cardiovascular, cardiorespiratory and brain-heart recordings, including data from neurocritical care.",

  themes: [
    {
      title: "Decomposing Information in Physiological Networks",
      body:  "Transfer entropy measures directed information flow between two processes and returns a single scalar. Partial information decomposition splits that flow into unique, redundant and synergistic contributions from several sources. For multivariate Gaussian processes I compute these measures using state space models, which gives closed-form expressions in the time and frequency domains instead of estimates that need long recordings."
    },
    {
      title: "High-Order Interactions Beyond Pairs",
      body:  "Mutual information, interaction information, the redundancy-synergy index and the O-information were built for static variables, and the number of candidate multiplets grows exponentially with network size. I extended them to dynamic processes as the interaction information rate, the redundancy-synergy index rate and the O-information rate gradient, then paired these with a stepwise search that finds the multiplets maximising redundancy or synergy without enumerating every subset. Validation used VAR networks with cascade, common-drive and common-target structure."
    },
    {
      title: "Long-Range Correlations and Multiple Time Scales",
      body:  "Heart period, systolic pressure and respiration carry long-memory correlations that short-memory VAR models cannot represent, which biases information measures at coarse scales. A vector autoregressive fractionally integrated (VARFI) representation handles short-term dynamics and long-range correlations together. Applied to rest, mental and postural stress, it separates the two stressors: postural stress raises redundant and synergistic transfer from pressure and respiration to heart period at short scales, while mental stress raises transfer from pressure to heart period at longer scales."
    },
    {
      title: "Estimation from Short and Noisy Recordings",
      body:  "Clinical recordings are short and non-stationary, and information estimators fail on them without signalling failure. I build surrogate-data tests that use information storage as the discriminating statistic for autodependency and nonlinearity within one process, and the mutual information rate for coupling and nonlinearity within a pair. Applied to heart period and respiratory flow, these tests showed that slow paced breathing raises the predictability of both signals and dampens nonlinearity in their coupling. Related work covers mutual information rate estimation from short time series, and a unified framework linking correlation-based, Granger-causal, spectral and information-theoretic measures under linear and model-free estimators."
    },
    {
      title: "Neurocritical Care and Acute Brain Injury",
      body:  "With the Neurocritical Care Unit of São João Hospital I apply these methods to plateau waves of intracranial pressure, episodes of sustained pressure elevation in brain-injured patients. Decomposing the information among intracranial pressure, arterial pressure, heart period and end-tidal CO₂ during these episodes characterises the autonomic response and the state of cerebral autoregulation, and tests whether the dysfunction involves higher-order terms rather than pairwise coupling alone."
    },
    {
      title: "Does Synergy Track Recovery After Stroke?",
      body:  "EEG functional connectivity has been proposed as a prognostic marker of motor and cognitive recovery after stroke for decades, yet a recent systematic review found no consistent pattern. Connectivity is pairwise, so it cannot capture structure that emerges from the joint distribution of three or more sources. I test whether the synergy-redundancy balance shifts from the acute to the chronic stage, and whether that shift tracks recovery, using multivariate O-information with its local and time-resolved form, O-information gradients that map which regions and clinical scores drive synergy or redundancy, a transfer entropy decomposition that separates synergistic from redundant contributions, and a spectral decomposition that resolves which frequency bands carry each. A competing prediction comes from the Ising model, where synergy peaks as a system approaches a more ordered state and then falls, which would place peak synergy at an intermediate stage rather than at full recovery."
    },
    {
      title: "Methods That Travel",
      body:  "The same estimators apply outside physiology. The multiplet search was tested on historical climate data, where it identifies redundant and synergistic groups among the variables governing El Niño and the Southern Oscillation."
    }
  ],

  // TODO: if you release code for any of the methods above, list it here.
  // Set to [] to hide the section entirely.
  software: []
};
