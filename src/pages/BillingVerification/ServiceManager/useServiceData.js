import { useState, useEffect } from 'react';

/**
 * Hook to fetch and transform service consumption data from SAP-Cloud-FinOps MCP service
 * Note: This uses mock data currently. To integrate with actual MCP service,
 * replace getMockData() with an API endpoint that calls the MCP service on the backend.
 */
function useServiceData(filters) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // TODO: Replace this with actual API call to backend endpoint
        // that uses mcp_SAP-Cloud-FinOps_MCPService_ConsumptionData_query
        // 
        // Example API call structure:
        // const response = await fetch('/api/consumption-data', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     filters: {
        //       interval: filters.reading || 'Daily',
        //       date: filters.date,
        //       month: filters.month,
        //       service: filters.service
        //     }
        //   })
        // });
        // const data = await response.json();

        const mockData = getMockData(filters);
        
        // Filter data based on filters
        let filteredData = mockData;
        
        if (filters.service) {
          filteredData = filteredData.filter(item =>
            item.service.toLowerCase().includes(filters.service.toLowerCase())
          );
        }

        setData(filteredData);
      } catch (err) {
        console.error('Error fetching service data:', err);
        setError(err.message || 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters.reading, filters.date, filters.month, filters.service]);

  return { data, loading, error };
}

/**
 * Mock data generator - simulates data structure from MCP ConsumptionData
 * This matches the structure from the screenshot
 */
function getMockData(filters) {
  const today = new Date();
  const dateStr = filters.date || today.toISOString().split('T')[0];
  const monthStr = filters.month || '202511';
  
  // Sample services from the screenshot
  const services = [
    {
      service: 'SAP HANA Cloud',
      cost: 628.56,
      deltaCost: 11.35,
      forecastedCost: 754.27,
      commercialCount: 1,
      technicalCount: 6
    },
    {
      service: 'SAP AI Launchpad',
      cost: 637.00,
      deltaCost: 0.00,
      forecastedCost: 637.00,
      commercialCount: 1,
      technicalCount: 1
    },
    {
      service: 'Cloud Foundry Runtime',
      cost: 367.99,
      deltaCost: 0.00,
      forecastedCost: 371.36,
      commercialCount: 1,
      technicalCount: 1
    },
    {
      service: 'SAP Build Work Zone, standard edition',
      cost: 135.00,
      deltaCost: 0.00,
      forecastedCost: 135.00,
      commercialCount: 1,
      technicalCount: 1
    },
    {
      service: 'Business Application Studio',
      cost: 30.00,
      deltaCost: 0.00,
      forecastedCost: 30.00,
      commercialCount: 1,
      technicalCount: 1
    },
    {
      service: 'Identity Authentication',
      cost: 18.00,
      deltaCost: 0.00,
      forecastedCost: 20.64,
      commercialCount: 2,
      technicalCount: 2
    },
    {
      service: 'Job Scheduling Service',
      cost: 15.00,
      deltaCost: 0.00,
      forecastedCost: 15.00,
      commercialCount: 1,
      technicalCount: 1
    },
    {
      service: 'AI Core',
      cost: 2.26,
      deltaCost: 0.00,
      forecastedCost: 2.59,
      commercialCount: 1,
      technicalCount: 6
    },
    {
      service: 'Application Logging Service',
      cost: 0.00,
      deltaCost: 0.00,
      forecastedCost: 0.00,
      commercialCount: 0,
      technicalCount: 1
    },
    {
      service: 'Audit Log Service',
      cost: 0.00,
      deltaCost: 0.00,
      forecastedCost: 0.00,
      commercialCount: 0,
      technicalCount: 3
    },
    {
      service: 'Destination',
      cost: 0.00,
      deltaCost: 0.00,
      forecastedCost: 0.00,
      commercialCount: 0,
      technicalCount: 2
    },
    {
      service: 'HTML5 Application Repository Service',
      cost: 0.00,
      deltaCost: 0.00,
      forecastedCost: 0.00,
      commercialCount: 0,
      technicalCount: 1
    },
    {
      service: 'SAP Build Process Automation',
      cost: 8.50,
      deltaCost: 1.20,
      forecastedCost: 10.00,
      commercialCount: 1,
      technicalCount: 2
    }
  ];

  return services.map((service, index) => {
    const forecastedPct = service.forecastedCost > 0 
      ? Math.round((service.cost / service.forecastedCost) * 100)
      : 100;
    
    return {
      id: `${dateStr}-${service.service}-${index}`,
      date: dateStr,
      month: monthStr,
      service: service.service,
      cost: service.cost,
      deltaCost: service.deltaCost,
      deltaCostPct: service.cost > 0 
        ? Math.round((service.deltaCost / service.cost) * 100)
        : 0,
      forecastedCost: service.forecastedCost,
      forecastedPct: forecastedPct,
      currency: 'USD',
      commercialCount: service.commercialCount,
      technicalCount: service.technicalCount,
      paygCost: 0,
      cloudCreditsCost: service.cost
    };
  });
}

export default useServiceData;

