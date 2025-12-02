export function generateSACData() {
  // Simulate October 2025 SAP Analytics Cloud usage data
  const days = 31;
  const data = [];

  for (let day = 1; day <= days; day++) {
    // Simulate realistic patterns:
    // - Weekends (days 4-5, 11-12, 18-19, 25-26) have lower activity
    // - Month-end (days 28-31) has higher planning activity
    // - Mid-month (day 15) has reporting surge
    // - Monday spikes (days 6, 13, 20, 27) for weekly reviews
    
    const isWeekend = [4, 5, 11, 12, 18, 19, 25, 26].includes(day);
    const isMonthEnd = day >= 28;
    const isMidMonth = day === 15;
    const isMonday = [6, 13, 20, 27].includes(day);
    const isQuarterlyReview = day === 10; // Quarterly business review

    // Content Consumption Metrics
    const baseStoryViews = isWeekend ? 120 : 850;
    const story_views = isMonday 
      ? baseStoryViews * 1.4 + (Math.random() * 100)
      : isQuarterlyReview
        ? baseStoryViews * 1.8
        : baseStoryViews + (Math.random() * 150 - 75);

    const baseDashboardAccess = isWeekend ? 80 : 420;
    const dashboard_access = isMidMonth 
      ? baseDashboardAccess * 1.5
      : baseDashboardAccess + (Math.random() * 80 - 40);

    const baseReportExports = isWeekend ? 15 : 95;
    const report_exports = isMidMonth 
      ? baseReportExports * 2.2 // Monthly reporting
      : isMonthEnd 
        ? baseReportExports * 1.6
        : baseReportExports + (Math.random() * 30 - 15);

    const baseScheduledPubs = 45;
    const scheduled_publications = isMidMonth 
      ? baseScheduledPubs * 1.8
      : baseScheduledPubs + (Math.random() * 15 - 7);

    // User Activity Metrics
    const baseActiveUsers = isWeekend ? 35 : 145;
    const active_users = isQuarterlyReview 
      ? baseActiveUsers + 45 // More users for quarterly review
      : isMonday 
        ? baseActiveUsers + 20
        : baseActiveUsers + Math.floor(Math.random() * 25 - 12);

    const baseSessionDuration = 18; // minutes
    const avg_session_duration = isQuarterlyReview 
      ? baseSessionDuration + 12
      : isMonthEnd 
        ? baseSessionDuration + 8
        : baseSessionDuration + (Math.random() * 6 - 3);

    const baseBIUsers = isWeekend ? 28 : 98;
    const bi_users = isMonday 
      ? baseBIUsers + 15
      : baseBIUsers + Math.floor(Math.random() * 20 - 10);

    const basePlanningUsers = isWeekend ? 8 : 47;
    const planning_users = isMonthEnd 
      ? basePlanningUsers + 25 // Planning surge at month-end
      : basePlanningUsers + Math.floor(Math.random() * 12 - 6);

    // Data & Performance Metrics
    const baseQueryTime = 2.4; // seconds
    const avg_query_time = isQuarterlyReview 
      ? baseQueryTime + 1.5 // Heavy load
      : isMonthEnd 
        ? baseQueryTime + 0.8
        : baseQueryTime + (Math.random() * 0.8 - 0.4);

    const baseDataRefresh = isWeekend ? 25 : 85;
    const data_refresh_count = isMidMonth 
      ? baseDataRefresh * 1.6
      : baseDataRefresh + (Math.random() * 20 - 10);

    const baseModelLoad = 3.2; // seconds
    const model_load_time = isQuarterlyReview 
      ? baseModelLoad + 1.8
      : baseModelLoad + (Math.random() * 1.2 - 0.6);

    const baseCacheHit = 78; // %
    const cache_hit_rate = isMonday 
      ? baseCacheHit - 8 // Cache cold after weekend
      : baseCacheHit + (Math.random() * 10 - 5);

    // Planning Operations Metrics
    const basePlanningSessions = isWeekend ? 12 : 65;
    const planning_sessions = isMonthEnd 
      ? basePlanningSessions * 2.2 // Month-end planning surge
      : basePlanningSessions + (Math.random() * 20 - 10);

    const baseInputCompletion = 72; // %
    const input_task_completion = isMonthEnd 
      ? Math.min(98, baseInputCompletion + 20) // Rush to complete
      : baseInputCompletion + (Math.random() * 15 - 7);

    const baseVersionComparisons = isWeekend ? 5 : 28;
    const version_comparisons = isMonthEnd 
      ? baseVersionComparisons * 2.5
      : baseVersionComparisons + (Math.random() * 10 - 5);

    const baseWorkflowTasks = isWeekend ? 8 : 42;
    const workflow_tasks = isMonthEnd 
      ? baseWorkflowTasks * 1.8
      : baseWorkflowTasks + (Math.random() * 15 - 7);

    // System Utilization Metrics
    const baseStorage = 245 + (day * 0.8); // Gradual growth
    const storage_used = baseStorage + (Math.random() * 5 - 2.5);

    const baseAPICalls = isWeekend ? 1200 : 5800;
    const api_calls = isQuarterlyReview 
      ? baseAPICalls * 1.6
      : baseAPICalls + (Math.random() * 800 - 400);

    const baseEmbeddedViews = isWeekend ? 45 : 320;
    const embedded_views = isMonday 
      ? baseEmbeddedViews * 1.3
      : baseEmbeddedViews + (Math.random() * 60 - 30);

    data.push({
      day,
      // Content Consumption
      story_views: Math.max(50, Math.round(story_views)),
      dashboard_access: Math.max(30, Math.round(dashboard_access)),
      report_exports: Math.max(5, Math.round(report_exports)),
      scheduled_publications: Math.max(20, Math.round(scheduled_publications)),
      // User Activity
      active_users: Math.max(20, Math.round(active_users)),
      avg_session_duration: Math.max(5, parseFloat(avg_session_duration.toFixed(1))),
      bi_users: Math.max(15, Math.round(bi_users)),
      planning_users: Math.max(5, Math.round(planning_users)),
      // Data & Performance
      avg_query_time: Math.max(0.5, parseFloat(avg_query_time.toFixed(2))),
      data_refresh_count: Math.max(10, Math.round(data_refresh_count)),
      model_load_time: Math.max(1, parseFloat(model_load_time.toFixed(2))),
      cache_hit_rate: Math.min(95, Math.max(60, parseFloat(cache_hit_rate.toFixed(1)))),
      // Planning Operations
      planning_sessions: Math.max(5, Math.round(planning_sessions)),
      input_task_completion: Math.min(100, Math.max(50, parseFloat(input_task_completion.toFixed(1)))),
      version_comparisons: Math.max(2, Math.round(version_comparisons)),
      workflow_tasks: Math.max(3, Math.round(workflow_tasks)),
      // System Utilization
      storage_used: parseFloat(storage_used.toFixed(1)),
      api_calls: Math.max(500, Math.round(api_calls)),
      embedded_views: Math.max(20, Math.round(embedded_views))
    });
  }

  return data;
}



