export const harvestingData = {
  sac: {
    inactiveUsers: [
      // Harvestable
      { assignDate: 'Jul 20, 2024', lastActivity: 'Jan 2, 2025 13:00:00', assignmentDuration: '95 days', email: 'robert.thompson@demo-industries.com', user: 'RTHOMPSON', active: 'No', company: 'Demo Industries', organization: 'Finance', manager: 'Alice Smith', managerApproval: 'Yes' },
      { assignDate: 'Aug 5, 2024', lastActivity: 'Jan 15, 2025 9:00:00', assignmentDuration: '88 days', email: 'sarah.johnson@demo-industries.com', user: 'SJOHNSON', active: 'No', company: 'Demo Industries', organization: 'Sales', manager: 'Bob Johnson', managerApproval: 'Yes' },
      // Not Harvestable - Manager Approval No
      { assignDate: 'Aug 12, 2024', lastActivity: 'Jan 15, 2025 16:00:00', assignmentDuration: '82 days', email: 'michael.williams@demo-industries.com', user: 'MWILLIAMS', active: 'No', company: 'Demo Industries', organization: 'Marketing', manager: 'Charlie Brown', managerApproval: 'No' },
      // Not Harvestable - Duration < 75
      { assignDate: 'Nov 10, 2024', lastActivity: 'Jan 21, 2025 9:00:00', assignmentDuration: '65 days', email: 'jennifer.brown@demo-industries.com', user: 'JBROWN', active: 'No', company: 'Demo Industries', organization: 'HR', manager: 'Diana Prince', managerApproval: 'Yes' },
      { assignDate: 'Nov 18, 2024', lastActivity: 'Jan 30, 2025 15:00:00', assignmentDuration: '58 days', email: 'david.davis@demo-industries.com', user: 'DDAVIS', active: 'No', company: 'Demo Industries', organization: 'IT', manager: 'Eve Adams', managerApproval: 'Yes' },
      { assignDate: 'Dec 1, 2024', lastActivity: 'Feb 3, 2025 3:00:00', assignmentDuration: '48 days', email: 'elizabeth.miller@demo-industries.com', user: 'EMILLER', active: 'No', company: 'Demo Industries', organization: 'Finance', manager: 'Alice Smith', managerApproval: 'No' }
    ],
    noLogOnUsers: [
      // Harvestable
      { assignDate: 'Jun 15, 2024', assignmentDuration: '135 days', license: 'Planning Professional', email: 'barbara.white@demo-industries.com', user: 'BWHITE', active: 'No', company: 'Demo Industries', organization: 'Finance', manager: 'Alice Smith', managerApproval: 'Yes' },
      { assignDate: 'Jul 1, 2024', assignmentDuration: '120 days', license: 'Planning Professional', email: 'daniel.harris@demo-industries.com', user: 'DHARRIS', active: 'No', company: 'Demo Industries', organization: 'Sales', manager: 'Bob Johnson', managerApproval: 'Yes' },
      // Not Harvestable
      { assignDate: 'Jul 20, 2024', assignmentDuration: '101 days', license: 'Planning Standard', email: 'susan.martin@demo-industries.com', user: 'SMARTIN', active: 'No', company: 'Demo Industries', organization: 'Marketing', manager: 'Charlie Brown', managerApproval: 'No' },
      { assignDate: 'Aug 5, 2024', assignmentDuration: '87 days', license: 'Planning Standard', email: 'joseph.garcia@demo-industries.com', user: 'JGARCIA', active: 'Yes', company: 'Demo Industries', organization: 'HR', manager: 'Diana Prince', managerApproval: 'Yes' },
      { assignDate: 'Oct 15, 2024', assignmentDuration: '62 days', license: 'Business Intelligence', email: 'karen.martinez@demo-industries.com', user: 'KMARTINEZ', active: 'No', company: 'Demo Industries', organization: 'IT', manager: 'Eve Adams', managerApproval: 'Yes' }
    ]
  },
  signavio: {
    inactiveUsers: [
      // Harvestable: Not Active (duration 102 >= 75) + Manager Approval Yes = GREEN + GREEN
      { assignDate: 'Aug 18, 2024', lastActivity: 'Dec 18, 2024 10:00:00', assignmentDuration: '102 days', email: 'ravi.patel@demo-industries.com', user: 'RPATEL', active: 'No', company: 'Demo Industries', organization: 'Operations', manager: 'Jennifer Kim', managerApproval: 'Yes' },
      // Harvestable: Not Active (duration 77 >= 75) + Manager Approval Yes = GREEN + GREEN
      { assignDate: 'Sep 12, 2024', lastActivity: 'Dec 12, 2024 14:00:00', assignmentDuration: '77 days', email: 'li.chen@demo-industries.com', user: 'LCHEN', active: 'No', company: 'Demo Industries', organization: 'Business Process', manager: 'Michael Torres', managerApproval: 'Yes' },
      // NOT Harvestable: Not Active (duration 76 >= 75) but Manager Approval No = GREEN + RED
      { assignDate: 'Oct 14, 2024', lastActivity: 'Jan 14, 2025 9:00:00', assignmentDuration: '76 days', email: 'anna.kim@demo-industries.com', user: 'AKIM', active: 'No', company: 'Demo Industries', organization: 'Process Excellence', manager: 'Sarah Chen', managerApproval: 'No' },
      // NOT Harvestable: Not Active (duration 54 < 75) + Manager Approval Yes = RED + GREEN
      { assignDate: 'Oct 5, 2024', lastActivity: 'Dec 5, 2024 11:00:00', assignmentDuration: '54 days', email: 'jorge.martinez@demo-industries.com', user: 'JMARTINEZ', active: 'No', company: 'Demo Industries', organization: 'Process Excellence', manager: 'Sarah Chen', managerApproval: 'Yes' },
      // NOT Harvestable: Active (duration 51 < 75) + Manager Approval Yes = RED + GREEN
      { assignDate: 'Nov 8, 2024', lastActivity: 'Jan 8, 2025 16:00:00', assignmentDuration: '51 days', email: 'stefan.muller@demo-industries.com', user: 'SMULLER', active: 'Yes', company: 'Demo Industries', organization: 'Quality Assurance', manager: 'David Anderson', managerApproval: 'Yes' },
      // NOT Harvestable: Not Active (duration 58 < 75) + Manager Approval Yes = RED + GREEN
      { assignDate: 'Nov 22, 2024', lastActivity: 'Jan 22, 2025 13:00:00', assignmentDuration: '58 days', email: 'maria.garcia@demo-industries.com', user: 'MGARCIA', active: 'No', company: 'Demo Industries', organization: 'Business Process', manager: 'Michael Torres', managerApproval: 'Yes' },
      // NOT Harvestable: Not Active (duration 58 < 75) + Manager Approval No = RED + RED
      { assignDate: 'Dec 1, 2024', lastActivity: 'Feb 1, 2025 15:00:00', assignmentDuration: '58 days', email: 'thomas.lewis@demo-industries.com', user: 'TLEWIS', active: 'No', company: 'Demo Industries', organization: 'Operations', manager: 'Jennifer Kim', managerApproval: 'No' },
      // NOT Harvestable: Active (duration 48 < 75) + Manager Approval Yes = RED + GREEN
      { assignDate: 'Dec 10, 2024', lastActivity: 'Feb 10, 2025 11:00:00', assignmentDuration: '48 days', email: 'nicole.anderson@demo-industries.com', user: 'NANDERSON', active: 'Yes', company: 'Demo Industries', organization: 'Quality Assurance', manager: 'David Anderson', managerApproval: 'Yes' }
    ],
    noLogOnUsers: [
      // Harvestable: Not Active (duration 110 >= 75) + Manager Approval Yes = GREEN + GREEN
      { assignDate: 'Aug 10, 2024', assignmentDuration: '110 days', license: 'Process Analyst', email: 'david.white@demo-industries.com', user: 'DWHITE', active: 'No', company: 'Demo Industries', organization: 'Operations', manager: 'Jennifer Kim', managerApproval: 'Yes' },
      // Harvestable: Not Active (duration 126 >= 75) + Manager Approval Yes = GREEN + GREEN
      { assignDate: 'Jul 25, 2024', assignmentDuration: '126 days', license: 'Process Manager', email: 'frank.martin@demo-industries.com', user: 'FMARTIN', active: 'No', company: 'Demo Industries', organization: 'Process Excellence', manager: 'Sarah Chen', managerApproval: 'Yes' },
      // NOT Harvestable: Active (duration 136 >= 75) + Manager Approval No = RED + RED
      { assignDate: 'Jul 15, 2024', assignmentDuration: '136 days', license: 'Process Manager', email: 'brian.wilson@demo-industries.com', user: 'BWILSON', active: 'Yes', company: 'Demo Industries', organization: 'Process Excellence', manager: 'Sarah Chen', managerApproval: 'No' },
      // NOT Harvestable: Active (duration 161 >= 75) + Manager Approval Yes = RED + GREEN
      { assignDate: 'Jun 20, 2024', assignmentDuration: '161 days', license: 'Process Manager', email: 'claire.thompson@demo-industries.com', user: 'CTHOMPSON', active: 'Yes', company: 'Demo Industries', organization: 'Business Process', manager: 'Michael Torres', managerApproval: 'Yes' },
      // NOT Harvestable: Active (duration 84 >= 75) + Manager Approval No = RED + RED
      { assignDate: 'Sep 5, 2024', assignmentDuration: '84 days', license: 'Process Analyst', email: 'emma.harris@demo-industries.com', user: 'EHARRIS', active: 'Yes', company: 'Demo Industries', organization: 'Quality Assurance', manager: 'David Anderson', managerApproval: 'No' },
      // NOT Harvestable: Active (duration 58 < 75) + Manager Approval Yes = RED + GREEN
      { assignDate: 'Oct 1, 2024', assignmentDuration: '58 days', license: 'Process Viewer', email: 'grace.clark@demo-industries.com', user: 'GCLARK', active: 'Yes', company: 'Demo Industries', organization: 'Business Process', manager: 'Michael Torres', managerApproval: 'Yes' },
      // NOT Harvestable: Not Active (duration 105 >= 75) + Manager Approval No = GREEN + RED
      { assignDate: 'Aug 15, 2024', assignmentDuration: '105 days', license: 'Process Analyst', email: 'henry.rodriguez@demo-industries.com', user: 'HRODRIGUEZ', active: 'No', company: 'Demo Industries', organization: 'Operations', manager: 'Jennifer Kim', managerApproval: 'No' }
    ]
  },
  'business-ai': {
    inactiveUsers: [
      // Harvestable
      { assignDate: 'Jul 10, 2024', lastActivity: 'Nov 28, 2024 10:00:00', assignmentDuration: '98 days', email: 'kevin.brown@demo-industries.com', user: 'KBROWN', active: 'No', company: 'Demo Industries', organization: 'HR', manager: 'Diana Prince', managerApproval: 'Yes' },
      { assignDate: 'Aug 1, 2024', lastActivity: 'Dec 3, 2024 14:00:00', assignmentDuration: '92 days', email: 'lisa.jones@demo-industries.com', user: 'LJONES', active: 'No', company: 'Demo Industries', organization: 'Finance', manager: 'Alice Smith', managerApproval: 'Yes' },
      // Not Harvestable
      { assignDate: 'Sep 5, 2024', lastActivity: 'Dec 15, 2024 9:00:00', assignmentDuration: '78 days', email: 'michael.davis@demo-industries.com', user: 'MDAVIS', active: 'No', company: 'Demo Industries', organization: 'Sales', manager: 'Bob Johnson', managerApproval: 'No' },
      { assignDate: 'Oct 20, 2024', lastActivity: 'Jan 5, 2025 16:00:00', assignmentDuration: '68 days', email: 'nancy.miller@demo-industries.com', user: 'NMILLER', active: 'No', company: 'Demo Industries', organization: 'Marketing', manager: 'Charlie Brown', managerApproval: 'Yes' },
      { assignDate: 'Nov 5, 2024', lastActivity: 'Jan 18, 2025 11:00:00', assignmentDuration: '55 days', email: 'olivia.williams@demo-industries.com', user: 'OWILLIAMS', active: 'No', company: 'Demo Industries', organization: 'IT', manager: 'Eve Adams', managerApproval: 'Yes' }
    ],
    noLogOnUsers: [
      // Harvestable
      { assignDate: 'May 20, 2024', assignmentDuration: '145 days', license: 'HCM Analytics Professional', email: 'quinn.moore@demo-industries.com', user: 'QMOORE', active: 'No', company: 'Demo Industries', organization: 'HR', manager: 'Diana Prince', managerApproval: 'Yes' },
      { assignDate: 'Jun 10, 2024', assignmentDuration: '128 days', license: 'HCM Analytics Standard', email: 'rachel.taylor@demo-industries.com', user: 'RTAYLOR', active: 'No', company: 'Demo Industries', organization: 'Finance', manager: 'Alice Smith', managerApproval: 'Yes' },
      // Not Harvestable
      { assignDate: 'Jul 5, 2024', assignmentDuration: '103 days', license: 'HCM Analytics Professional', email: 'samuel.anderson@demo-industries.com', user: 'SANDERSON', active: 'Yes', company: 'Demo Industries', organization: 'Sales', manager: 'Bob Johnson', managerApproval: 'Yes' },
      { assignDate: 'Aug 20, 2024', assignmentDuration: '88 days', license: 'HCM Analytics Standard', email: 'tina.thomas@demo-industries.com', user: 'TTHOMAS', active: 'No', company: 'Demo Industries', organization: 'Marketing', manager: 'Charlie Brown', managerApproval: 'No' },
      { assignDate: 'Oct 1, 2024', assignmentDuration: '70 days', license: 'HCM Analytics Professional', email: 'uma.jackson@demo-industries.com', user: 'UJACKSON', active: 'No', company: 'Demo Industries', organization: 'IT', manager: 'Eve Adams', managerApproval: 'Yes' }
    ]
  },
  'dynamic-forms': {
    inactiveUsers: [
      // Harvestable
      { assignDate: 'Jun 1, 2024', lastActivity: 'Oct 15, 2024 09:30:00', assignmentDuration: '115 days', email: 'antonio.garcia@demo-industries.com', user: 'AGARCIA', active: 'No', company: 'Demo Industries', organization: 'Operations', manager: 'Jennifer Kim', managerApproval: 'Yes' },
      { assignDate: 'Jul 8, 2024', lastActivity: 'Oct 28, 2024 14:15:00', assignmentDuration: '95 days', email: 'bethany.smith@demo-industries.com', user: 'BSMITH', active: 'No', company: 'Demo Industries', organization: 'Logistics', manager: 'Frank White', managerApproval: 'Yes' },
      // Not Harvestable
      { assignDate: 'Aug 15, 2024', lastActivity: 'Nov 5, 2024 11:00:00', assignmentDuration: '80 days', email: 'carlos.johnson@demo-industries.com', user: 'CJOHNSON', active: 'No', company: 'Demo Industries', organization: 'Warehouse', manager: 'Grace Lee', managerApproval: 'No' },
      { assignDate: 'Sep 20, 2024', lastActivity: 'Nov 18, 2024 16:45:00', assignmentDuration: '72 days', email: 'diana.wang@demo-industries.com', user: 'DWANG', active: 'No', company: 'Demo Industries', organization: 'Operations', manager: 'Jennifer Kim', managerApproval: 'Yes' },
      { assignDate: 'Oct 10, 2024', lastActivity: 'Dec 2, 2024 08:30:00', assignmentDuration: '60 days', email: 'ethan.nguyen@demo-industries.com', user: 'ENGUYEN', active: 'No', company: 'Demo Industries', organization: 'Logistics', manager: 'Frank White', managerApproval: 'Yes' },
      { assignDate: 'Nov 1, 2024', lastActivity: 'Dec 14, 2024 13:00:00', assignmentDuration: '52 days', email: 'fiona.lopez@demo-industries.com', user: 'FLOPEZ', active: 'No', company: 'Demo Industries', organization: 'Warehouse', manager: 'Grace Lee', managerApproval: 'No' }
    ],
    noLogOnUsers: [
      // Harvestable
      { assignDate: 'Apr 15, 2024', assignmentDuration: '155 days', license: 'Mobile Forms Professional', email: 'kevin.chen@demo-industries.com', user: 'KCHEN', active: 'No', company: 'Demo Industries', organization: 'Operations', manager: 'Jennifer Kim', managerApproval: 'Yes' },
      { assignDate: 'May 20, 2024', assignmentDuration: '138 days', license: 'Mobile Forms Professional', email: 'laura.wilson@demo-industries.com', user: 'LWILSON', active: 'No', company: 'Demo Industries', organization: 'Logistics', manager: 'Frank White', managerApproval: 'Yes' },
      // Not Harvestable
      { assignDate: 'Jun 25, 2024', assignmentDuration: '112 days', license: 'Mobile Forms Standard', email: 'marcus.brown@demo-industries.com', user: 'MBROWN', active: 'Yes', company: 'Demo Industries', organization: 'Warehouse', manager: 'Grace Lee', managerApproval: 'Yes' },
      { assignDate: 'Jul 30, 2024', assignmentDuration: '97 days', license: 'Mobile Forms Standard', email: 'natalie.kim@demo-industries.com', user: 'NKIM', active: 'No', company: 'Demo Industries', organization: 'Operations', manager: 'Jennifer Kim', managerApproval: 'No' },
      { assignDate: 'Sep 15, 2024', assignmentDuration: '68 days', license: 'Mobile Forms Professional', email: 'omar.davis@demo-industries.com', user: 'ODAVIS', active: 'No', company: 'Demo Industries', organization: 'Logistics', manager: 'Frank White', managerApproval: 'Yes' }
    ]
  }
};

// License costs configuration
export const licenseCosts = {
  'sac': { name: 'SAP Analytics Cloud Licenses', subtitle: 'Analytics Cloud', cost: 45 },
  'signavio': { name: 'Signavio Licenses', subtitle: 'Process Intelligence', cost: 35 },
  'business-ai': { name: 'Business AI - HCM package', subtitle: 'Human Capital Management', cost: 50 },
  'dynamic-forms': { name: 'Dynamic Forms with SAP Mobile Execution', subtitle: 'Mobile Execution', cost: 40 }
};

