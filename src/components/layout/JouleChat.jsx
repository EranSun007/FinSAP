import styles from '../../styles/components/JouleChat.module.css';

function JouleChat({ isOpen, onClose }) {
  const suggestions = [
    {
      id: 'suggest-endpoints',
      icon: '🔗',
      title: 'Suggest endpoints',
      subtitle: 'Which endpoints are best to start with?'
    },
    {
      id: 'summarize-usage',
      icon: '📊',
      title: 'Summarize usage',
      subtitle: 'Summarize the main ways this API is used.'
    },
    {
      id: 'recommend-tutorials',
      icon: '📚',
      title: 'Recommend tutorials',
      subtitle: 'Point me to tutorials for beginners.'
    }
  ];

  return (
    <div className={`${styles.jouleOverlay} ${isOpen ? styles.open : ''}`}>
      <div className={styles.jouleHeader}>
        <div className={styles.headerLeft}>
          <span className={styles.headerTitle}>Joule for FinOps</span>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.iconButton} aria-label="Minimize">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="3" y="7" width="10" height="2" />
            </svg>
          </button>
          <button className={styles.iconButton} onClick={onClose} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M13.657 2.343l-11.314 11.314M2.343 2.343l11.314 11.314" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.jouleContent}>
        <div className={styles.suggestionsContainer}>
          {suggestions.map((suggestion) => (
            <button key={suggestion.id} className={styles.suggestionCard}>
              <div className={styles.suggestionIcon}>{suggestion.icon}</div>
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default JouleChat;

