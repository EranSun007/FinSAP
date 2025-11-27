import PropTypes from 'prop-types';
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

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger']),
  className: PropTypes.string
};

Button.defaultProps = {
  onClick: undefined,
  disabled: false,
  variant: 'default',
  className: ''
};

export default Button;

