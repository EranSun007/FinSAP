export const costForecast = {
  days: Array.from({ length: 24 }, (_, i) => i + 1),
  btpea: {
    costData: [
      120, 180, 220, 280, 310, 340, 380,
      850,  // Day 8: Spike - new development environment deployed
      420, 450, 480,
      280,  // Day 12: Drop - weekend/reduced usage
      520, 580,
      1200, // Day 15: Major spike - production deployment
      650, 720,
      450,  // Day 18: Drop - optimization efforts
      780,
      1450, // Day 20: Spike - end of month processing
      920, 980, 1050, 1120
    ],
    forecastData: [
      130, 190, 240, 300, 340, 380, 420,
      900,  // Forecast adjusts to spike
      480, 520, 560,
      320,  // Forecast adjusts to drop
      600, 680,
      1300, // Forecast reflects deployment pattern
      750, 820,
      520,  // Forecast adjusts down
      900,
      1550, // Forecast expects high usage
      1050, 1150, 1250, 1350
    ]
  },
  businessAI: {
    costData: [
      80, 95, 110, 125, 140, 160, 180,
      195, 210,
      580,  // Day 10: Spike - AI model training started
      620, 450, // Day 12: Drop after training complete
      380, 420,
      750,  // Day 15: Spike - batch inference processing
      480, 520,
      320,  // Day 18: Drop - model optimization
      560, 600,
      920,  // Day 21: Spike - month-end analytics
      680, 720, 760
    ],
    forecastData: [
      85, 100, 120, 135, 155, 175, 195,
      215, 235,
      630,  // Forecast adjusts to training spike
      670, 500,
      420, 470,
      820,  // Forecast reflects inference pattern
      540, 580,
      370,
      620, 660,
      1000, // Forecast expects analytics spike
      750, 800, 850
    ]
  }
};

