import PropTypes from 'prop-types';

/**
 * Icon wrapper component using Font Awesome
 * Maps SAP-like icon names to Font Awesome classes
 * 
 * @param {string} name - Icon name (SAP-style naming)
 * @param {string} size - Icon size (small, medium, large, or custom CSS value)
 * @param {string} color - Icon color (CSS color value)
 * @param {string} className - Additional CSS classes
 * @param {object} style - Inline styles
 * @param {function} onClick - Click handler
 * @param {string} title - Accessibility title
 */
function Icon({ 
  name, 
  size = 'medium', 
  color, 
  className = '', 
  style = {},
  onClick,
  title
}) {
  // Map SAP icon names to Font Awesome classes
  const iconMap = {
    // Header & Navigation
    'search': 'fa-magnifying-glass',
    'sys-help': 'fa-circle-question',
    'bell': 'fa-bell',
    'slim-arrow-down': 'fa-chevron-down',
    'navigation-down-arrow': 'fa-chevron-down',
    'chevron-right': 'fa-chevron-right',
    'full-screen': 'fa-expand',
    'minimize': 'fa-window-minimize',
    'decline': 'fa-xmark',
    'microphone': 'fa-microphone',
    
    // Status & State
    'accept': 'fa-check',
    'warning': 'fa-triangle-exclamation',
    'alert': 'fa-bolt',
    'circle-task': 'fa-circle',
    'status-in-process': 'fa-circle-half-stroke',
    'show': 'fa-eye',
    'hide': 'fa-eye-slash',
    
    // Content & Features
    'bar-chart': 'fa-chart-column',
    'product': 'fa-box',
    'chain-link': 'fa-link',
    'newspaper': 'fa-newspaper',
    'measuring-point': 'fa-ruler',
    'lightbulb': 'fa-lightbulb',
    'lab': 'fa-flask',
    
    // Actions
    'expand-group': 'fa-plus',
    'collapse-group': 'fa-minus',
    'action': 'fa-arrow-up-right-from-square',
    'overflow': 'fa-ellipsis-vertical',
    'delete': 'fa-trash',
    'action-settings': 'fa-gear',
    
    // Hierarchy & Structure
    'customer': 'fa-user',
    'globe': 'fa-globe',
    'inventory': 'fa-server',
    'folder-blank': 'fa-folder',
    'account': 'fa-circle-user',
    'cloud': 'fa-cloud',
    'it-system': 'fa-diagram-project',
    'instance': 'fa-cube',
    'app': 'fa-mobile-screen',
    'machine-learning': 'fa-brain',
    'spaces': 'fa-table-cells',
  };

  // Size mappings
  const sizeMap = {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem'
  };

  const iconSize = sizeMap[size] || size;
  const faClass = iconMap[name] || 'fa-circle';

  const iconStyle = {
    fontSize: iconSize,
    color: color,
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: 1,
    cursor: onClick ? 'pointer' : 'inherit',
    ...style
  };

  return (
    <i
      className={`fa-solid ${faClass} ${className}`}
      style={iconStyle}
      onClick={onClick}
      title={title}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={title || name}
    />
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
    PropTypes.string
  ]),
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  title: PropTypes.string
};

export default Icon;

