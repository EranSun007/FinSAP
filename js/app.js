// View Switching Logic
function switchView(viewId) {
    // Hide all views
    document.querySelectorAll('.view-section').forEach(el => el.style.display = 'none');
    // Show target view
    document.getElementById(viewId).style.display = 'block';

    // Update active state in nav
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

    // Find the link that triggered this (if possible) or manually set active states
    // This is a simplified approach for the demo
    if (viewId === 'view-overview') {
        document.querySelector('.nav-bar > .nav-item:first-child').classList.add('active');
    } else {
        // Keep the dropdown parent active if a child is selected
        document.querySelector('.dropdown').classList.add('active');
    }

    // Init PaPM chart if switching to that view and not yet initialized
    if (viewId === 'view-papm' && !window.papmChartInitialized) {
        initPapmChart();
        window.papmChartInitialized = true;
    }

    // Init Harvesting view if switching to it
    if (viewId === 'view-harvesting') {
        renderHarvestingView();
    }
}

function renderHarvestingView(licenseType = 'sac') {
    const inactiveTableBody = document.querySelector('#inactive-users-table tbody');
    const noLogonTableBody = document.querySelector('#no-logon-users-table tbody');

    // Get data for the selected license type
    const licenseData = FinOpsData.harvesting[licenseType];

    if (!licenseData) {
        console.error('No data found for license type:', licenseType);
        return;
    }

    if (inactiveTableBody) {
        inactiveTableBody.innerHTML = licenseData.inactiveUsers.map((user, index) => `
            <tr>
                <td><input type="checkbox" class="row-checkbox inactive-checkbox" data-index="${index}"></td>
                <td>${user.timestamp}</td>
                <td>${user.user}</td>
                <td>${user.email}</td>
            </tr>
        `).join('');
    }

    if (noLogonTableBody) {
        noLogonTableBody.innerHTML = licenseData.noLogOnUsers.map((user, index) => `
            <tr>
                <td><input type="checkbox" class="row-checkbox nologon-checkbox" data-index="${index}"></td>
                <td>${user.user}</td>
                <td>${user.email}</td>
                <td>${user.license}</td>
            </tr>
        `).join('');
    }

    // Initialize selection handlers
    initHarvestingSelectionHandlers();

    // Add license type selector handler
    const licenseSelector = document.getElementById('license-type-selector');
    if (licenseSelector && !licenseSelector.dataset.listenerAdded) {
        licenseSelector.addEventListener('change', (e) => {
            renderHarvestingView(e.target.value);
        });
        licenseSelector.dataset.listenerAdded = 'true';
    }
}

function initHarvestingSelectionHandlers() {
    const selectAllInactive = document.getElementById('select-all-inactive');
    const selectAllNologon = document.getElementById('select-all-nologon');
    const addTagBtn = document.getElementById('btn-add-tag');
    const harvestBtn = document.getElementById('btn-harvest');

    // Select all inactive users
    if (selectAllInactive) {
        selectAllInactive.addEventListener('change', (e) => {
            const checkboxes = document.querySelectorAll('.inactive-checkbox');
            checkboxes.forEach(cb => {
                cb.checked = e.target.checked;
                const row = cb.closest('tr');
                if (row) row.classList.toggle('selected', e.target.checked);
            });
            updateActionButtons();
        });
    }

    // Select all no-logon users
    if (selectAllNologon) {
        selectAllNologon.addEventListener('change', (e) => {
            const checkboxes = document.querySelectorAll('.nologon-checkbox');
            checkboxes.forEach(cb => {
                cb.checked = e.target.checked;
                const row = cb.closest('tr');
                if (row) row.classList.toggle('selected', e.target.checked);
            });
            updateActionButtons();
        });
    }

    // Individual checkbox handlers
    document.querySelectorAll('.row-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            // Toggle selected class on parent row
            const row = e.target.closest('tr');
            if (row) {
                row.classList.toggle('selected', e.target.checked);
            }
            updateActionButtons();
        });
    });

    // Action button handlers
    if (addTagBtn) {
        addTagBtn.addEventListener('click', handleAddTag);
    }

    if (harvestBtn) {
        harvestBtn.addEventListener('click', handleHarvest);
    }
}

function updateActionButtons() {
    const selectedCount = document.querySelectorAll('.row-checkbox:checked').length;
    const addTagBtn = document.getElementById('btn-add-tag');
    const harvestBtn = document.getElementById('btn-harvest');

    if (addTagBtn && harvestBtn) {
        addTagBtn.disabled = selectedCount === 0;
        harvestBtn.disabled = selectedCount === 0;
    }

    // Update select-all checkboxes state
    updateSelectAllState('inactive');
    updateSelectAllState('nologon');
}

function updateSelectAllState(type) {
    const selectAllId = type === 'inactive' ? 'select-all-inactive' : 'select-all-nologon';
    const checkboxClass = type === 'inactive' ? '.inactive-checkbox' : '.nologon-checkbox';

    const selectAll = document.getElementById(selectAllId);
    const checkboxes = document.querySelectorAll(checkboxClass);

    if (selectAll && checkboxes.length > 0) {
        const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
        selectAll.checked = checkedCount === checkboxes.length;
        selectAll.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
    }
}

function handleAddTag() {
    const selected = getSelectedUsers();
    if (selected.length === 0) return;

    const tag = prompt(`Add tag to ${selected.length} user(s):`);
    if (tag) {
        console.log('Adding tag:', tag, 'to users:', selected);
        alert(`Tag "${tag}" would be added to ${selected.length} user(s)`);
        // Here you would implement the actual tag addition logic
    }
}

function handleHarvest() {
    const selected = getSelectedUsers();
    if (selected.length === 0) return;

    const confirmed = confirm(`Harvest licenses from ${selected.length} user(s)?\n\nThis will remove their licenses and make them available for reassignment.`);
    if (confirmed) {
        console.log('Harvesting licenses from users:', selected);
        alert(`${selected.length} license(s) would be harvested and made available for reassignment`);
        // Here you would implement the actual harvesting logic
    }
}

function getSelectedUsers() {
    const selected = [];

    // Get current license type
    const licenseSelector = document.getElementById('license-type-selector');
    const licenseType = licenseSelector ? licenseSelector.value : 'sac';
    const licenseData = FinOpsData.harvesting[licenseType];

    if (!licenseData) {
        console.error('No data found for license type:', licenseType);
        return selected;
    }

    // Get selected inactive users
    document.querySelectorAll('.inactive-checkbox:checked').forEach(checkbox => {
        const index = parseInt(checkbox.dataset.index);
        selected.push({
            type: 'inactive',
            licenseType: licenseType,
            ...licenseData.inactiveUsers[index]
        });
    });

    // Get selected no-logon users
    document.querySelectorAll('.nologon-checkbox:checked').forEach(checkbox => {
        const index = parseInt(checkbox.dataset.index);
        selected.push({
            type: 'nologon',
            licenseType: licenseType,
            ...licenseData.noLogOnUsers[index]
        });
    });

    return selected;
}

function renderHarvestingOpportunities() {
    const tbody = document.getElementById('harvesting-opportunities-tbody');
    if (!tbody) return;

    // Define license cost estimates (monthly per user)
    const licenseCosts = {
        'sac': { name: 'SAP Analytics Cloud Licenses', subtitle: 'Analytics Cloud', cost: 45 },
        'signavio': { name: 'Signavio Licenses', subtitle: 'Process Intelligence', cost: 35 },
        'business-ai': { name: 'Business AI - HCM package', subtitle: 'Human Capital Management', cost: 50 }
    };

    // Calculate data for each license type
    const opportunities = Object.keys(FinOpsData.harvesting).map(licenseKey => {
        const data = FinOpsData.harvesting[licenseKey];
        const inactiveCount = data.inactiveUsers.length;
        const noLogonCount = data.noLogOnUsers.length;
        const total = inactiveCount + noLogonCount;
        const costPerUser = licenseCosts[licenseKey].cost;
        const savings = total * costPerUser;

        return {
            key: licenseKey,
            name: licenseCosts[licenseKey].name,
            subtitle: licenseCosts[licenseKey].subtitle,
            inactiveCount,
            noLogonCount,
            total,
            savings,
            percentage: Math.min(100, (total / 30) * 100) // Assume 30 is max for percentage
        };
    });

    // Sort by total harvestable (descending) and take top 3
    opportunities.sort((a, b) => b.total - a.total);
    const top3 = opportunities.slice(0, 3);

    tbody.innerHTML = top3.map(opp => {
        const statusClass = opp.percentage >= 70 ? 'warning' : opp.percentage >= 40 ? 'medium' : 'high';
        const statusIcon = opp.percentage >= 70 ? '⚠️' : opp.percentage >= 40 ? '⚡' : '✓';

        return `
            <tr>
                <td>
                    <div class="license-type-cell">${opp.name}</div>
                    <div class="license-subtitle">${opp.subtitle}</div>
                </td>
                <td><span class="user-count">${opp.inactiveCount}</span></td>
                <td><span class="user-count">${opp.noLogonCount}</span></td>
                <td><span class="user-count">${opp.total}</span></td>
                <td>
                    <span class="savings-amount">${opp.savings.toFixed(2)} USD</span>
                </td>
                <td>
                    <div class="status-cell">
                        <div class="status-progress">
                            <div class="status-progress-bar">
                                <div class="status-progress-fill ${statusClass}" style="width: ${opp.percentage}%"></div>
                            </div>
                        </div>
                        <span class="status-icon">${statusIcon}</span>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}


// Initialize Charts
function initCharts() {
    // Donut Chart
    const ctxDonut = document.getElementById('donutChart').getContext('2d');
    new Chart(ctxDonut, {
        type: 'doughnut',
        data: {
            labels: FinOpsData.forecastBreakdown.labels,
            datasets: [{
                data: FinOpsData.forecastBreakdown.data,
                backgroundColor: FinOpsData.forecastBreakdown.colors,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        usePointStyle: true,
                        boxWidth: 8,
                        font: { size: 10 }
                    }
                }
            },
            cutout: '60%'
        }
    });

    // Bar Chart (Cost and Forecast)
    const ctxBar = document.getElementById('barChart').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: FinOpsData.costForecast.days,
            datasets: [
                {
                    label: 'BTP EA Cost',
                    data: FinOpsData.costForecast.btpea.costData,
                    backgroundColor: '#008b8b',
                    order: 3
                },
                {
                    label: 'BTP EA Forecast',
                    data: FinOpsData.costForecast.btpea.forecastData,
                    type: 'line',
                    borderColor: '#005f5f',
                    borderWidth: 2,
                    pointRadius: 2,
                    order: 1,
                    tension: 0.1
                },
                {
                    label: 'Business AI Cost',
                    data: FinOpsData.costForecast.businessAI.costData,
                    backgroundColor: '#9b59b6',
                    order: 4
                },
                {
                    label: 'Business AI Forecast',
                    data: FinOpsData.costForecast.businessAI.forecastData,
                    type: 'line',
                    borderColor: '#6c3483',
                    borderWidth: 2,
                    pointRadius: 2,
                    order: 2,
                    tension: 0.1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    align: 'start',
                    labels: {
                        usePointStyle: true,
                        boxWidth: 8,
                        font: { size: 11 }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#f0f0f0'
                    },
                    ticks: {
                        font: { size: 10 }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: { size: 10 }
                    }
                }
            }
        }
    });
}

// Render Top Services Table (Dynamic Population)
function renderTopServices() {
    const tbody = document.querySelector('table tbody');
    if (!tbody) return;

    tbody.innerHTML = FinOpsData.topServices.map(service => `
        <tr>
            <td>
                <div class="service-name">${service.name}</div>
                <div class="service-sub">${service.sub}</div>
            </td>
            <td style="text-align: right;" class="cost-value">${service.cost}</td>
            <td style="text-align: right; color: ${service.increaseColor};">${service.increase}</td>
            <td style="text-align: right; color: ${service.increaseColor === 'inherit' ? 'inherit' : service.increaseColor};" class="forecast-value">${service.forecast}</td>
            <td>
                <div class="progress-wrapper">
                    <div style="font-size: 0.75rem; width: 30px;">${service.forecastPct}%</div>
                    <div class="progress-bg"><div class="progress-fill" style="width: ${Math.min(service.forecastPct, 100)}%; background-color: ${service.barColor};"></div></div>
                    <span class="status-icon" style="color: ${service.statusColor};">${service.status}</span>
                </div>
            </td>
        </tr>
    `).join('');
}

// --- PaPM Chart Logic ---
let papmChartInstance = null;
let papmData = null;
let visibleMetrics = {};
let papmScale = 'auto';

function initPapmChart() {
    // 1. Generate Data
    papmData = FinOpsData.papm.generateData();

    // 2. Init Visibility State
    FinOpsData.papm.allMetrics.forEach(m => {
        visibleMetrics[m.key] = true;
    });

    // 3. Render Controls
    renderPapmControls();
    updatePapmInsights('last-month'); // Initial load

    // 4. Init Chart
    const ctx = document.getElementById('papmChart').getContext('2d');

    // Prepare datasets
    const datasets = FinOpsData.papm.allMetrics.map(metric => ({
        label: metric.name,
        data: papmData.map(d => d[metric.key]),
        borderColor: metric.color,
        backgroundColor: metric.color,
        borderWidth: metric.strokeWidth,
        borderDash: metric.strokeDasharray || [],
        pointRadius: metric.key === 'total_peak_memory' ? 4 : 0,
        pointHoverRadius: 6,
        tension: 0.3,
        fill: false,
        hidden: !visibleMetrics[metric.key]
    }));

    papmChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: papmData.map(d => d.day),
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        boxWidth: 10
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    titleColor: '#2c3e50',
                    bodyColor: '#2c3e50',
                    borderColor: '#ddd',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        title: (context) => `Day ${context[0].label}`,
                        label: (context) => {
                            const metric = FinOpsData.papm.allMetrics.find(m => m.name === context.dataset.label);
                            return `${context.dataset.label}: ${context.raw.toFixed(2)} ${metric ? metric.unit : ''}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Day of October 2025'
                    },
                    grid: {
                        color: '#ecf0f1'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Value (GB / CU / vCPUs)'
                    },
                    grid: {
                        color: '#ecf0f1'
                    },
                    beginAtZero: true
                }
            }
        }
    });

    // Scale Change Listener
    document.getElementById('papm-scale-select').addEventListener('change', (e) => {
        papmScale = e.target.value;
        updatePapmChart();
    });

    // Insights Period Listener
    const periodSelect = document.getElementById('papm-insights-period');
    if (periodSelect) {
        periodSelect.addEventListener('change', (e) => {
            updatePapmInsights(e.target.value);
        });
    }
}

function renderPapmControls() {
    const categoryContainer = document.getElementById('papm-category-toggles');
    const metricContainer = document.getElementById('papm-metric-toggles');

    if (!categoryContainer || !metricContainer) return;

    // Categories
    const categories = ['PaPM', 'PaPM Model Types (L/P/F)', 'HANA Cloud (UDM)', 'HANA Cockpit (Live)'];

    categoryContainer.innerHTML = categories.map(cat => {
        const catMetrics = FinOpsData.papm.allMetrics.filter(m => m.category === cat);
        const allVisible = catMetrics.every(m => visibleMetrics[m.key]);
        const someVisible = catMetrics.some(m => visibleMetrics[m.key]);

        let statusClass = '';
        let icon = '○';
        if (allVisible) { statusClass = 'active'; icon = '✓'; }
        else if (someVisible) { statusClass = 'partial'; icon = '◐'; }

        return `<button class="category-btn ${statusClass}" onclick="togglePapmCategory('${cat}')">${icon} ${cat}</button>`;
    }).join('');

    // Metrics
    metricContainer.innerHTML = FinOpsData.papm.allMetrics.map(metric => {
        const isVisible = visibleMetrics[metric.key];
        const activeClass = isVisible ? 'active' : '';
        const eyeIcon = isVisible ? '👁️' : '👁️‍🗨️'; // Simplified icons
        const color = isVisible ? metric.color : '#ddd';
        const dashStyle = metric.strokeDasharray ? 'border-bottom: 2px dashed ' + color : 'border-bottom: 3px solid ' + color;

        return `
            <button class="metric-btn ${activeClass}" onclick="togglePapmMetric('${metric.key}')" style="border-color: ${isVisible ? metric.color : '#ddd'}; background: ${isVisible ? metric.color + '15' : 'white'}">
                <span style="color: ${color}">${eyeIcon}</span>
                <div class="metric-info">
                    <div class="metric-name" style="color: ${isVisible ? metric.color : '#95a5a6'}">${metric.name}</div>
                    <div class="metric-meta">${metric.category} • ${metric.unit}</div>
                </div>
                <div style="width: 20px; height: 0; ${dashStyle}"></div>
            </button>
        `;
    }).join('');
}

// Exposed globally for onclick handlers
window.togglePapmCategory = function (category) {
    const catMetrics = FinOpsData.papm.allMetrics.filter(m => m.category === category);
    const allVisible = catMetrics.every(m => visibleMetrics[m.key]);

    catMetrics.forEach(m => {
        visibleMetrics[m.key] = !allVisible;
    });

    renderPapmControls();
    updatePapmChart();
};

window.togglePapmMetric = function (key) {
    visibleMetrics[key] = !visibleMetrics[key];
    renderPapmControls();
    updatePapmChart();
};

function updatePapmChart() {
    if (!papmChartInstance) return;

    // Update dataset visibility
    papmChartInstance.data.datasets.forEach(dataset => {
        // Find metric key by label (name)
        const metric = FinOpsData.papm.allMetrics.find(m => m.name === dataset.label);
        if (metric) {
            // Chart.js uses 'hidden' property which is inverse of visible
            // But we can also filter data. Here we just toggle visibility property
            papmChartInstance.setDatasetVisibility(
                papmChartInstance.data.datasets.indexOf(dataset),
                visibleMetrics[metric.key]
            );
        }
    });

    // Update Scale
    if (papmScale === 'auto') {
        papmChartInstance.options.scales.y.min = 0;
        papmChartInstance.options.scales.y.max = undefined; // Auto
    } else {
        // Calculate min/max of visible data
        let min = Infinity;
        let max = -Infinity;
        let hasVisibleData = false;

        FinOpsData.papm.allMetrics.forEach(metric => {
            if (visibleMetrics[metric.key]) {
                const values = papmData.map(d => d[metric.key]);
                min = Math.min(min, ...values);
                max = Math.max(max, ...values);
                hasVisibleData = true;
            }
        });

        if (hasVisibleData) {
            const padding = (max - min) * 0.1;
            papmChartInstance.options.scales.y.min = Math.max(0, min - padding);
            papmChartInstance.options.scales.y.max = max + padding;
        }
    }

    papmChartInstance.update();
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    renderTopServices();
    initCharts();
    renderHarvestingOpportunities();
});

function updatePapmInsights(period) {
    const grid = document.getElementById('papm-insights-grid');
    if (!grid) return;

    const insights = FinOpsData.papm.insights[period] || [];

    grid.innerHTML = insights.map(insight => `
        <div class="insight-card" style="background: ${insight.bg}; border-left-color: ${insight.color}; color: ${insight.textColor};">
            <strong>${insight.title}:</strong>
            <p>${insight.text}</p>
        </div>
    `).join('');
}
