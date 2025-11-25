const FinOpsData = {
    forecastBreakdown: {
        labels: ['Exploration SBX', 'Cursor DEV', 'Data DEV', 'IT', 'FinOps'],
        data: [35.8, 13.2, 4.8, 4.6, 41.6],
        colors: ['#0070f2', '#e8743b', '#107e3e', '#d04437', '#8931a2']
    },
    costForecast: {
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
    },
    topServices: [
        {
            name: 'SAP HANA Cloud',
            sub: 'Capacity Units',
            cost: '613.99 USD',
            increase: '4%',
            increaseColor: 'var(--sap-orange)',
            forecast: '767.49 USD',
            forecastPct: 70,
            status: '✔',
            statusColor: 'var(--sap-green)',
            barColor: 'var(--sap-green)'
        },
        {
            name: 'SAP AI Launchpad',
            sub: 'Tenants',
            cost: '637.00 USD',
            increase: '0%',
            increaseColor: 'inherit',
            forecast: '637.00 USD',
            forecastPct: 50,
            status: '✔',
            statusColor: 'var(--sap-green)',
            barColor: 'var(--sap-green)'
        },
        {
            name: 'Cloud Foundry Runtime',
            sub: 'GB Memory',
            cost: '367.99 USD',
            increase: '0%',
            increaseColor: 'var(--sap-orange)',
            forecast: '372.12 USD',
            forecastPct: 101,
            status: '⚠️',
            statusColor: 'var(--sap-orange)',
            barColor: 'var(--sap-orange)'
        },
        {
            name: 'SAP Build Work Zone',
            sub: 'Active Users',
            cost: '135.00 USD',
            increase: '0%',
            increaseColor: 'inherit',
            forecast: '135.00 USD',
            forecastPct: 50,
            status: '✔',
            statusColor: 'var(--sap-green)',
            barColor: 'var(--sap-green)'
        },
        {
            name: 'Business Application Studio',
            sub: 'Users',
            cost: '30.00 USD',
            increase: '0%',
            increaseColor: 'inherit',
            forecast: '30.00 USD',
            forecastPct: 100,
            status: '✔',
            statusColor: 'var(--sap-green)',
            barColor: 'var(--sap-green)'
        }
    ],
    papm: {
        allMetrics: [
            // PaPM Metrics
            {
                key: 'total_peak_memory',
                name: 'PaPM: Total Peak Memory',
                color: '#e74c3c',
                category: 'PaPM',
                unit: 'GB',
                strokeWidth: 3
            },
            {
                key: 'hana_storage_memory_gb_sm',
                name: 'PaPM: Storage Memory (SM)',
                color: '#3498db',
                category: 'PaPM',
                unit: 'GB',
                strokeWidth: 2
            },
            {
                key: 'hana_peak_calculation_memory_gb_sm',
                name: 'PaPM: Peak Calculation Memory (SM)',
                color: '#f39c12',
                category: 'PaPM',
                unit: 'GB',
                strokeWidth: 2
            },
            // HANA Cloud Metrics (UDM)
            {
                key: 'hc_compute_memory_gb',
                name: 'HANA Cloud: Compute Memory (avg)',
                color: '#16a085',
                category: 'HANA Cloud (UDM)',
                unit: 'GB',
                strokeWidth: 2,
                strokeDasharray: [5, 5]
            },
            {
                key: 'hc_storage_gb',
                name: 'HANA Cloud: Storage (avg)',
                color: '#9b59b6',
                category: 'HANA Cloud (UDM)',
                unit: 'GB',
                strokeWidth: 2,
                strokeDasharray: [5, 5]
            },
            {
                key: 'capacity_units',
                name: 'HANA Cloud: Capacity Units (daily)',
                color: '#27ae60',
                category: 'HANA Cloud (UDM)',
                unit: 'CU',
                strokeWidth: 2,
                strokeDasharray: [3, 3]
            },
            {
                key: 'hc_compute_vcpu',
                name: 'HANA Cloud: vCPU Count',
                color: '#c0392b',
                category: 'HANA Cloud (UDM)',
                unit: 'vCPUs',
                strokeWidth: 1,
                strokeDasharray: [2, 2]
            },
            // HANA Cockpit System Views (Real-time queries)
            {
                key: 'hana_column_store_gb',
                name: 'HANA Cockpit: Column Store Memory',
                color: '#d35400',
                category: 'HANA Cockpit (Live)',
                unit: 'GB',
                strokeWidth: 2,
                strokeDasharray: [8, 4]
            },
            {
                key: 'hana_papm_tables_gb',
                name: 'HANA Cockpit: PaPM Tables (M_CS_TABLES)',
                color: '#2980b9',
                category: 'HANA Cockpit (Live)',
                unit: 'GB',
                strokeWidth: 2,
                strokeDasharray: [8, 4]
            },
            {
                key: 'hana_heap_memory_gb',
                name: 'HANA Cockpit: Heap Memory',
                color: '#8e44ad',
                category: 'HANA Cockpit (Live)',
                unit: 'GB',
                strokeWidth: 2,
                strokeDasharray: [8, 4]
            },
            // PaPM Model Types (Brandon's Brewery Model - L/P/F)
            {
                key: 'papm_model_lifd_gb',
                name: '🍺 PaPM Model: L (LIFD) - 0.357 base',
                color: '#1abc9c',
                category: 'PaPM Model Types (L/P/F)',
                unit: 'GB',
                strokeWidth: 2,
                strokeDasharray: [10, 2]
            },
            {
                key: 'papm_model_psa_gb',
                name: '🍺 PaPM Model: P (PSA) - 0.579 base',
                color: '#e67e22',
                category: 'PaPM Model Types (L/P/F)',
                unit: 'GB',
                strokeWidth: 2,
                strokeDasharray: [10, 2]
            },
            {
                key: 'papm_model_profitability_gb',
                name: '🍺 PaPM Model: F (Profitability) - 0.859 base',
                color: '#c0392b',
                category: 'PaPM Model Types (L/P/F)',
                unit: 'GB',
                strokeWidth: 2,
                strokeDasharray: [10, 2]
            },
        ],
        insights: {
            'last-month': [
                { title: 'Oct 25 Spike', text: 'PaPM total peak jumped to 949.10 GB (from baseline 841.08 GB) due to intensive calculation', color: '#f39c12', bg: '#fff3cd', textColor: '#856404' },
                { title: 'HANA Stability', text: 'HANA Cloud metrics remain stable at ~75 GB average, showing time-averaged allocation', color: '#27ae60', bg: '#d5f4e6', textColor: '#155724' },
                { title: 'Storage Growth', text: 'PaPM storage memory grew from 45 GB to 76 GB throughout the month', color: '#16a085', bg: '#e8f5e9', textColor: '#004d40' },
                { title: 'HANA Cockpit Correlation', text: 'Real-time queries show Column Store spiking to 1,100+ GB on Oct 25, validating PaPM\'s peak', color: '#d35400', bg: '#fdecea', textColor: '#7b241c' },
                { title: '🍺 Brewery Model (L/P/F)', text: 'Three PaPM model types show different growth patterns - F (Profitability) spikes highest on Oct 25', color: '#1abc9c', bg: '#d1f2eb', textColor: '#0e6655' }
            ],
            'last-3-months': [
                { title: 'Quarterly Trend', text: 'Overall memory usage has increased by 15% over the last quarter, driven by new model deployments.', color: '#3498db', bg: '#d6eaf8', textColor: '#154360' },
                { title: 'Cost Efficiency', text: 'Cost per calculation unit has decreased by 5% due to optimization of the "Allocations" model.', color: '#27ae60', bg: '#d5f4e6', textColor: '#155724' },
                { title: 'Peak Usage', text: 'Highest peak observed in August (980 GB) during quarter-end closing activities.', color: '#e74c3c', bg: '#fadbd8', textColor: '#78281f' }
            ],
            'last-6-months': [
                { title: 'Capacity Planning', text: 'Current growth rate suggests reaching contract limits by Q1 next year. Consider capacity upgrade.', color: '#f39c12', bg: '#fff3cd', textColor: '#856404' },
                { title: 'Model Performance', text: 'Average calculation time has improved by 20% after the June patch update.', color: '#1abc9c', bg: '#d1f2eb', textColor: '#0e6655' },
                { title: 'Storage Optimization', text: 'Archiving of old results in July reclaimed 200 GB of storage space.', color: '#9b59b6', bg: '#f4ecf7', textColor: '#4a235a' }
            ],
            'last-year': [
                { title: 'Annual Growth', text: 'Year-over-year data volume growth is 45%, consistent with business expansion.', color: '#34495e', bg: '#ebedef', textColor: '#1b2631' },
                { title: 'Seasonal Patterns', text: 'Distinct usage spikes observed during month-end and quarter-end closes consistently.', color: '#2980b9', bg: '#d4e6f1', textColor: '#154360' },
                { title: 'Infrastructure ROI', text: 'Migration to HANA Cloud has resulted in a 30% TCO reduction compared to the previous on-premise setup.', color: '#27ae60', bg: '#d5f4e6', textColor: '#155724' }
            ]
        },
        generateData: function () {
            // PaPM data (Oct 25, 2025)
            const papmData = [
                { day: 1, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 45.09, hana_peak_calculation_memory_gb_sm: 665.70 },
                { day: 2, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 45.89, hana_peak_calculation_memory_gb_sm: 687.23 },
                { day: 3, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 46.12, hana_peak_calculation_memory_gb_sm: 698.45 },
                { day: 4, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 47.23, hana_peak_calculation_memory_gb_sm: 712.34 },
                { day: 5, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 48.45, hana_peak_calculation_memory_gb_sm: 723.56 },
                { day: 6, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 49.67, hana_peak_calculation_memory_gb_sm: 734.78 },
                { day: 7, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 51.23, hana_peak_calculation_memory_gb_sm: 745.12 },
                { day: 8, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 52.34, hana_peak_calculation_memory_gb_sm: 756.89 },
                { day: 9, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 53.45, hana_peak_calculation_memory_gb_sm: 768.34 },
                { day: 10, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 54.67, hana_peak_calculation_memory_gb_sm: 779.56 },
                { day: 11, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 55.89, hana_peak_calculation_memory_gb_sm: 790.78 },
                { day: 12, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 57.12, hana_peak_calculation_memory_gb_sm: 801.23 },
                { day: 13, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 58.34, hana_peak_calculation_memory_gb_sm: 812.45 },
                { day: 14, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 59.56, hana_peak_calculation_memory_gb_sm: 823.67 },
                { day: 15, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 60.78, hana_peak_calculation_memory_gb_sm: 834.89 },
                { day: 16, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 62.12, hana_peak_calculation_memory_gb_sm: 845.12 },
                { day: 17, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 63.34, hana_peak_calculation_memory_gb_sm: 856.34 },
                { day: 18, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 64.56, hana_peak_calculation_memory_gb_sm: 867.56 },
                { day: 19, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 65.78, hana_peak_calculation_memory_gb_sm: 823.45 },
                { day: 20, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 67.01, hana_peak_calculation_memory_gb_sm: 789.23 },
                { day: 21, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 68.23, hana_peak_calculation_memory_gb_sm: 798.67 },
                { day: 22, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 69.45, hana_peak_calculation_memory_gb_sm: 812.34 },
                { day: 23, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 70.67, hana_peak_calculation_memory_gb_sm: 834.56 },
                { day: 24, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 71.89, hana_peak_calculation_memory_gb_sm: 845.78 },
                { day: 25, total_peak_memory: 949.10, hana_storage_memory_gb_sm: 76.89, hana_peak_calculation_memory_gb_sm: 872.35 },
                { day: 26, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 74.56, hana_peak_calculation_memory_gb_sm: 801.23 },
                { day: 27, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 75.12, hana_peak_calculation_memory_gb_sm: 789.45 },
                { day: 28, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 75.67, hana_peak_calculation_memory_gb_sm: 778.90 },
                { day: 29, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 76.01, hana_peak_calculation_memory_gb_sm: 767.34 },
                { day: 30, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 76.34, hana_peak_calculation_memory_gb_sm: 756.78 },
                { day: 31, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 76.67, hana_peak_calculation_memory_gb_sm: 745.23 },
            ];

            // HANA Cloud data (simulated daily values)
            const hanaCloudData = papmData.map(p => ({
                day: p.day,
                hc_compute_memory_gb: 75.0, // 1800 GiB-hours / 24
                hc_storage_gb: 285.0, // 6837 GiB-hours / 24
                capacity_units: p.day === 25 ? 68.84 : 66.31 + (Math.random() - 0.5) * 2,
                hc_compute_vcpu: 5, // 120 hours / 24
            }));

            // HANA Cockpit System View Queries (simulated real-time data)
            const hanaCockpitData = papmData.map((p, i) => {
                const isCalcDay = p.day === 25;
                const baseColumnStore = p.hana_storage_memory_gb_sm * 8.5;
                const columnStoreGB = isCalcDay
                    ? baseColumnStore + 450
                    : baseColumnStore + (Math.random() * 50 - 25);

                const papmTableSizeGB = p.hana_storage_memory_gb_sm * 1.05;

                const baseHeap = 65.0;
                const heapMemoryGB = isCalcDay
                    ? baseHeap + 185
                    : baseHeap + (Math.random() * 20 - 10);

                return {
                    day: p.day,
                    hana_column_store_gb: columnStoreGB,
                    hana_papm_tables_gb: papmTableSizeGB,
                    hana_heap_memory_gb: heapMemoryGB,
                };
            });

            // PaPM Model Types Storage (L/P/F from Brandon's Brewery Model)
            const papmModelTypesData = papmData.map((p, i) => {
                const isCalcDay = p.day === 25;
                const totalStorage = p.hana_storage_memory_gb_sm;
                const storageRatio = totalStorage / (0.357 + 0.579 + 0.859);

                const baseL = storageRatio * 0.357;
                const lifdModelGB = baseL + (i * 0.15) + (Math.random() * 0.5 - 0.25);

                const baseP = storageRatio * 0.579;
                const psaModelGB = baseP + (i * 0.22) + (Math.random() * 0.5 - 0.25);

                const baseF = storageRatio * 0.859;
                const profitabilityModelGB = isCalcDay
                    ? baseF + (i * 0.35) + 15.5
                    : baseF + (i * 0.35) + (Math.random() * 2 - 1);

                return {
                    day: p.day,
                    papm_model_lifd_gb: lifdModelGB,
                    papm_model_psa_gb: psaModelGB,
                    papm_model_profitability_gb: profitabilityModelGB,
                };
            });

            // Merge all data sources
            return papmData.map((p, i) => ({
                ...p,
                ...hanaCloudData[i],
                ...hanaCockpitData[i],
                ...papmModelTypesData[i]
            }));
        }
    },
    harvesting: {
        sac: {
            inactiveUsers: [
                { timestamp: 'Jan 2, 2025 13:00:00', user: 'RTHOMPSON', email: 'robert.thompson@demo-industries.com' },
                { timestamp: 'Jan 15, 2025 9:00:00', user: 'SJOHNSON', email: 'sarah.johnson@demo-industries.com' },
                { timestamp: 'Jan 15, 2025 16:00:00', user: 'MWILLIAMS', email: 'michael.williams@demo-industries.com' },
                { timestamp: 'Jan 21, 2025 9:00:00', user: 'JBROWN', email: 'jennifer.brown@demo-industries.com' },
                { timestamp: 'Jan 30, 2025 15:00:00', user: 'DDAVIS', email: 'david.davis@demo-industries.com' },
                { timestamp: 'Feb 3, 2025 3:00:00', user: 'EMILLER', email: 'elizabeth.miller@demo-industries.com' },
                { timestamp: 'Feb 6, 2025 7:00:00', user: 'JWILSON', email: 'james.wilson@demo-industries.com' },
                { timestamp: 'Feb 6, 2025 8:00:00', user: 'LMOORE', email: 'linda.moore@demo-industries.com' },
                { timestamp: 'Feb 6, 2025 18:00:00', user: 'RTAYLOR', email: 'richard.taylor@demo-industries.com' },
                { timestamp: 'Feb 13, 2025 13:00:00', user: 'PANDERSON', email: 'patricia.anderson@demo-industries.com' },
                { timestamp: 'Feb 19, 2025 17:00:00', user: 'CTHOMAS', email: 'charles.thomas@demo-industries.com' },
                { timestamp: 'Feb 24, 2025 19:00:00', user: 'MJACKSON', email: 'mary.jackson@demo-industries.com' }
            ],
            noLogOnUsers: [
                { user: 'BWHITE', email: 'barbara.white@demo-industries.com', license: 'Planning Professional' },
                { user: 'DHARRIS', email: 'daniel.harris@demo-industries.com', license: 'Planning Professional' },
                { user: 'SMARTIN', email: 'susan.martin@demo-industries.com', license: 'Planning Standard' },
                { user: 'JGARCIA', email: 'joseph.garcia@demo-industries.com', license: 'Planning Standard' },
                { user: 'KMARTINEZ', email: 'karen.martinez@demo-industries.com', license: 'Business Intelligence' },
                { user: 'TROBINSON', email: 'thomas.robinson@demo-industries.com', license: 'Business Intelligence' },
                { user: 'NCLARK', email: 'nancy.clark@demo-industries.com', license: 'Planning Professional' },
                { user: 'CRODRIGUEZ', email: 'christopher.rodriguez@demo-industries.com', license: 'Planning Standard' },
                { user: 'MLEWIS', email: 'margaret.lewis@demo-industries.com', license: 'Business Intelligence' },
                { user: 'DLEE', email: 'donald.lee@demo-industries.com', license: 'Planning Professional' },
                { user: 'LWALKER', email: 'lisa.walker@demo-industries.com', license: 'Business Intelligence' },
                { user: 'PHALL', email: 'paul.hall@demo-industries.com', license: 'Planning Standard' }
            ]
        },
        signavio: {
            inactiveUsers: [
                { timestamp: 'Dec 5, 2024 11:00:00', user: 'JMARTINEZ', email: 'jorge.martinez@demo-industries.com' },
                { timestamp: 'Dec 12, 2024 14:00:00', user: 'LCHEN', email: 'li.chen@demo-industries.com' },
                { timestamp: 'Dec 18, 2024 10:00:00', user: 'RPATEL', email: 'ravi.patel@demo-industries.com' },
                { timestamp: 'Jan 8, 2025 16:00:00', user: 'SMULLER', email: 'stefan.muller@demo-industries.com' },
                { timestamp: 'Jan 14, 2025 9:00:00', user: 'AKIM', email: 'anna.kim@demo-industries.com' },
                { timestamp: 'Jan 22, 2025 13:00:00', user: 'MGARCIA', email: 'maria.garcia@demo-industries.com' },
                { timestamp: 'Feb 1, 2025 15:00:00', user: 'TLEWIS', email: 'thomas.lewis@demo-industries.com' },
                { timestamp: 'Feb 10, 2025 11:00:00', user: 'NANDERSON', email: 'nicole.anderson@demo-industries.com' }
            ],
            noLogOnUsers: [
                { user: 'BWILSON', email: 'brian.wilson@demo-industries.com', license: 'Process Manager' },
                { user: 'CTHOMPSON', email: 'claire.thompson@demo-industries.com', license: 'Process Manager' },
                { user: 'DWHITE', email: 'david.white@demo-industries.com', license: 'Process Analyst' },
                { user: 'EHARRIS', email: 'emma.harris@demo-industries.com', license: 'Process Analyst' },
                { user: 'FMARTIN', email: 'frank.martin@demo-industries.com', license: 'Process Manager' },
                { user: 'GCLARK', email: 'grace.clark@demo-industries.com', license: 'Process Viewer' },
                { user: 'HRODRIGUEZ', email: 'henry.rodriguez@demo-industries.com', license: 'Process Analyst' }
            ]
        },
        'business-ai': {
            inactiveUsers: [
                { timestamp: 'Nov 28, 2024 10:00:00', user: 'KBROWN', email: 'kevin.brown@demo-industries.com' },
                { timestamp: 'Dec 3, 2024 14:00:00', user: 'LJONES', email: 'lisa.jones@demo-industries.com' },
                { timestamp: 'Dec 15, 2024 9:00:00', user: 'MDAVIS', email: 'michael.davis@demo-industries.com' },
                { timestamp: 'Jan 5, 2025 16:00:00', user: 'NMILLER', email: 'nancy.miller@demo-industries.com' },
                { timestamp: 'Jan 18, 2025 11:00:00', user: 'OWILLIAMS', email: 'olivia.williams@demo-industries.com' },
                { timestamp: 'Feb 2, 2025 13:00:00', user: 'PJOHNSON', email: 'paul.johnson@demo-industries.com' }
            ],
            noLogOnUsers: [
                { user: 'QMOORE', email: 'quinn.moore@demo-industries.com', license: 'HCM Analytics Professional' },
                { user: 'RTAYLOR', email: 'rachel.taylor@demo-industries.com', license: 'HCM Analytics Standard' },
                { user: 'SANDERSON', email: 'samuel.anderson@demo-industries.com', license: 'HCM Analytics Professional' },
                { user: 'TTHOMAS', email: 'tina.thomas@demo-industries.com', license: 'HCM Analytics Standard' },
                { user: 'UJACKSON', email: 'uma.jackson@demo-industries.com', license: 'HCM Analytics Professional' },
                { user: 'VWHITE', email: 'victor.white@demo-industries.com', license: 'HCM Analytics Standard' },
                { user: 'WHARRIS', email: 'wendy.harris@demo-industries.com', license: 'HCM Analytics Professional' },
                { user: 'XMARTIN', email: 'xavier.martin@demo-industries.com', license: 'HCM Analytics Standard' }
            ]
        }
    }
};
