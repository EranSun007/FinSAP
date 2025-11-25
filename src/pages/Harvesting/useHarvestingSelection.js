import { useState, useCallback } from 'react';

export function useHarvestingSelection() {
  const [selectedInactive, setSelectedInactive] = useState([]);
  const [selectedNoLogon, setSelectedNoLogon] = useState([]);

  const toggleInactive = useCallback((index) => {
    setSelectedInactive(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  }, []);

  const toggleNoLogon = useCallback((index) => {
    setSelectedNoLogon(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  }, []);

  const toggleAllInactive = useCallback((count) => {
    if (selectedInactive.length === count) {
      setSelectedInactive([]);
    } else {
      setSelectedInactive(Array.from({ length: count }, (_, i) => i));
    }
  }, [selectedInactive.length]);

  const toggleAllNoLogon = useCallback((count) => {
    if (selectedNoLogon.length === count) {
      setSelectedNoLogon([]);
    } else {
      setSelectedNoLogon(Array.from({ length: count }, (_, i) => i));
    }
  }, [selectedNoLogon.length]);

  const clearSelection = useCallback(() => {
    setSelectedInactive([]);
    setSelectedNoLogon([]);
  }, []);

  const hasSelection = selectedInactive.length > 0 || selectedNoLogon.length > 0;
  const selectedCount = selectedInactive.length + selectedNoLogon.length;

  return {
    selectedInactive,
    selectedNoLogon,
    toggleInactive,
    toggleNoLogon,
    toggleAllInactive,
    toggleAllNoLogon,
    clearSelection,
    hasSelection,
    selectedCount
  };
}

