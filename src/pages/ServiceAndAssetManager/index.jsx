import Card, { CardHeader } from '../../components/ui/Card';

function ServiceAndAssetManager() {
  return (
    <div style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
      <Card>
        <CardHeader title="Service and Asset Manager" />
        <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--sap-text-light)' }}>
          <h2>Service and Asset Manager Dashboard</h2>
          <p>Specific metrics and controls for SAM will appear here.</p>
        </div>
      </Card>
    </div>
  );
}

export default ServiceAndAssetManager;

