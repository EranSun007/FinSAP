export function generatePapmData() {
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

