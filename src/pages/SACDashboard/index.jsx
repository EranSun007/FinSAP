import Card, { CardHeader } from '../../components/ui/Card';

function SACDashboard() {
  return (
    <div style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
      <Card>
        <CardHeader title="SAP Analytics Cloud" />
        <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--sap-text-light)' }}>
          <h2>SAC Dashboard</h2>
          <p>Embedded analytics and stories.</p>
        </div>
      </Card>
    </div>
  );
}

export default SACDashboard;

