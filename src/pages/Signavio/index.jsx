import Card, { CardHeader } from '../../components/ui/Card';

function Signavio() {
  return (
    <div style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
      <Card>
        <CardHeader title="Signavio" />
        <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--sap-text-light)' }}>
          <h2>Signavio Process Transformation</h2>
          <p>Process analysis and mining views.</p>
        </div>
      </Card>
    </div>
  );
}

export default Signavio;

