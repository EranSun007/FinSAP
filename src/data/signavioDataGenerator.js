export function generateSignavioData() {
  // Simulate October 2025 process mining data
  const days = 31;
  const data = [];

  for (let day = 1; day <= days; day++) {
    // Simulate realistic patterns:
    // - Weekends (days 4-5, 11-12, 18-19, 25-26) have lower activity
    // - Month-end (days 28-31) has higher processing volume
    // - Mid-month review (day 15) causes spike in compliance checks
    
    const isWeekend = [4, 5, 11, 12, 18, 19, 25, 26].includes(day);
    const isMonthEnd = day >= 28;
    const isMidMonthReview = day === 15;
    const isProcessOptimization = day === 22; // Process optimization initiative day

    // Process Efficiency Metrics
    const baseCycleTime = 4.5; // hours
    const cycleTimeVariation = (Math.random() - 0.5) * 0.8;
    const avg_cycle_time = isProcessOptimization 
      ? baseCycleTime - 0.8 // Optimization reduces cycle time
      : isMonthEnd 
        ? baseCycleTime + 1.2 // Month-end increases cycle time
        : baseCycleTime + cycleTimeVariation;

    const baseThroughput = isWeekend ? 45 : 120;
    const throughput = isMonthEnd 
      ? baseThroughput * 1.4 + (Math.random() * 20)
      : baseThroughput + (Math.random() * 30 - 15);

    const baseWaitTime = 1.2; // hours
    const avg_wait_time = isWeekend 
      ? baseWaitTime * 0.3
      : isMonthEnd 
        ? baseWaitTime * 1.8
        : baseWaitTime + (Math.random() * 0.4 - 0.2);

    const avg_processing_time = avg_cycle_time - avg_wait_time;

    // Process Compliance Metrics
    const baseConformance = 87;
    const conformance_rate = isMidMonthReview 
      ? 92 // Increased compliance during review
      : isProcessOptimization 
        ? 94 // Better after optimization
        : baseConformance + (Math.random() * 6 - 3);

    const baseSlaAdherence = 91;
    const sla_adherence = isMonthEnd 
      ? baseSlaAdherence - 8 // SLA pressure during month-end
      : isProcessOptimization 
        ? baseSlaAdherence + 5
        : baseSlaAdherence + (Math.random() * 6 - 3);

    const deviation_rate = 100 - conformance_rate + (Math.random() * 2 - 1);

    // Automation & AI Metrics
    const baseAutomation = 62;
    const automation_rate = isProcessOptimization 
      ? baseAutomation + 8 // Optimization increases automation
      : baseAutomation + (day * 0.15) + (Math.random() * 3 - 1.5); // Gradual improvement

    const baseBotExecutions = isWeekend ? 180 : 450;
    const bot_executions = isMonthEnd 
      ? baseBotExecutions * 1.5
      : baseBotExecutions + (Math.random() * 80 - 40);

    const ai_recommendations = isWeekend 
      ? 5 + Math.floor(Math.random() * 3)
      : 15 + Math.floor(Math.random() * 10);

    // Process Intelligence Metrics
    const baseVariants = 24;
    const process_variants = isMidMonthReview 
      ? baseVariants - 3 // Cleanup reduces variants
      : baseVariants + Math.floor(Math.random() * 4 - 2);

    const baseExceptionRate = 8;
    const exception_rate = isMonthEnd 
      ? baseExceptionRate + 4 // More exceptions during month-end
      : isProcessOptimization 
        ? baseExceptionRate - 2
        : baseExceptionRate + (Math.random() * 3 - 1.5);

    const baseReworkRate = 5;
    const rework_rate = isMonthEnd 
      ? baseReworkRate + 3
      : isProcessOptimization 
        ? baseReworkRate - 1.5
        : baseReworkRate + (Math.random() * 2 - 1);

    const first_pass_yield = 100 - rework_rate - (Math.random() * 2);

    // User Engagement Metrics
    const baseModelers = isWeekend ? 8 : 32;
    const active_modelers = isMidMonthReview 
      ? baseModelers + 12 // More users during review
      : baseModelers + Math.floor(Math.random() * 8 - 4);

    const baseViews = isWeekend ? 120 : 580;
    const process_views = isMidMonthReview 
      ? baseViews * 1.6
      : isMonthEnd 
        ? baseViews * 1.3
        : baseViews + (Math.random() * 100 - 50);

    const baseCollaboration = isWeekend ? 15 : 85;
    const collaboration_events = isMidMonthReview 
      ? baseCollaboration * 2
      : baseCollaboration + (Math.random() * 30 - 15);

    data.push({
      day,
      // Process Efficiency
      avg_cycle_time: Math.max(1, avg_cycle_time),
      throughput: Math.max(10, Math.round(throughput)),
      avg_wait_time: Math.max(0.1, avg_wait_time),
      avg_processing_time: Math.max(0.5, avg_processing_time),
      // Process Compliance
      conformance_rate: Math.min(100, Math.max(70, conformance_rate)),
      sla_adherence: Math.min(100, Math.max(70, sla_adherence)),
      deviation_rate: Math.min(30, Math.max(0, deviation_rate)),
      // Automation & AI
      automation_rate: Math.min(100, Math.max(40, automation_rate)),
      bot_executions: Math.max(50, Math.round(bot_executions)),
      ai_recommendations: Math.max(0, Math.round(ai_recommendations)),
      // Process Intelligence
      process_variants: Math.max(15, Math.round(process_variants)),
      exception_rate: Math.min(20, Math.max(2, exception_rate)),
      rework_rate: Math.min(15, Math.max(1, rework_rate)),
      first_pass_yield: Math.min(100, Math.max(80, first_pass_yield)),
      // User Engagement
      active_modelers: Math.max(5, Math.round(active_modelers)),
      process_views: Math.max(50, Math.round(process_views)),
      collaboration_events: Math.max(5, Math.round(collaboration_events))
    });
  }

  return data;
}



