import Icon from '../../components/ui/Icon';
import styles from '../../styles/pages/Signavio.module.css';

function SignavioHeader() {
  return (
    <div className={styles.signavioHeader}>
      <h1><Icon name="process" size="large" /> SAP Signavio Process Intelligence</h1>
      <p>October 2025 - Business process metrics showing efficiency, compliance, and automation trends</p>
    </div>
  );
}

export default SignavioHeader;

