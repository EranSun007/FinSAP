import { useState, useCallback } from 'react';
import { VIEWS } from '../constants/views';

export function useNavigation(initialView = VIEWS.OVERVIEW) {
  const [activeView, setActiveView] = useState(initialView);

  const navigate = useCallback((view) => {
    setActiveView(view);
  }, []);

  return { activeView, navigate };
}

