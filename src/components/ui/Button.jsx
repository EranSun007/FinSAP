import styles from '../../styles/components/Button.module.css';

function Button({ 
  children, 
  onClick, 
  disabled = false, 
  variant = 'default', 
  className = '' 
}) {
  const variantClass = styles[variant] || '';
  
  return (
    <button
      className={`${styles.button} ${variantClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

