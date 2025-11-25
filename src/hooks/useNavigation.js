import { useState, useCallback } from 'react';

export function useNavigation(initialView = 'overview') {
  const [activeView, setActiveView] = useState(initialView);

  const navigate = useCallback((view) => {
    setActiveView(view);
  }, []);

  return { activeView, navigate };
}

