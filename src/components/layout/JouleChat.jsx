import Icon from '../ui/Icon';
import styles from '../../styles/components/JouleChat.module.css';

function JouleChat({ isOpen, onClose }) {
  const suggestions = [
    {
      id: 'suggest-endpoints',
      iconName: 'chain-link',
      title: 'Suggest endpoints',
      subtitle: 'Which endpoints are best to start with?'
    },
    {
      id: 'summarize-usage',
      iconName: 'bar-chart',
      title: 'Summarize usage',
      subtitle: 'Summarize the main ways this API is used.'
    },
    {
      id: 'recommend-tutorials',
      iconName: 'newspaper',
      title: 'Recommend tutorials',
      subtitle: 'Point me to tutorials for beginners.'
    }
  ];

  return (
    <div className={`${styles.jouleOverlay} ${isOpen ? styles.open : ''}`}>
      <div className={styles.jouleHeader}>
        <div className={styles.headerLeft}>
          <span className={styles.headerTitle}>FinOps Agents</span>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.iconButton} aria-label="Minimize">
            <Icon name="minimize" size="medium" />
          </button>
          <button className={styles.iconButton} onClick={onClose} aria-label="Close">
            <Icon name="decline" size="medium" />
          </button>
        </div>
      </div>

      <div className={styles.jouleContent}>
        <div className={styles.suggestionsContainer}>
          {suggestions.map((suggestion) => (
            <button key={suggestion.id} className={styles.suggestionCard}>
              <div className={styles.suggestionIcon}>
                <Icon name={suggestion.iconName} size="large" />
              </div>
              <div className={styles.suggestionText}>
                <div className={styles.suggestionTitle}>{suggestion.title}</div>
                <div className={styles.suggestionSubtitle}>{suggestion.subtitle}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.jouleFooter}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            className={styles.input}
            placeholder="Ask anything"
          />
          <button className={styles.micButton} aria-label="Voice input">
            <Icon name="microphone" size="large" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default JouleChat;

