import { useState, useCallback } from 'react';
import { flattenTree, getAllNodeIds } from '../../data/costBreakdownData';

/**
 * Custom hook for managing tree expansion state
 */
function useTreeState(treeData) {
  // Initially expand the first two levels (Customer and Global Account)
  const [expandedIds, setExpandedIds] = useState(() => {
    const initialExpanded = new Set();
    initialExpanded.add(treeData.id); // Customer level
    if (treeData.children && treeData.children.length > 0) {
      initialExpanded.add(treeData.children[0].id); // Global Account level
    }
    return initialExpanded;
  });

  // Toggle expansion of a single node
  const toggleExpanded = useCallback((nodeId) => {
    setExpandedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  }, []);

  // Expand all nodes in the tree
  const expandAll = useCallback(() => {
    const allIds = getAllNodeIds(treeData);
    setExpandedIds(new Set(allIds));
  }, [treeData]);

  // Collapse all nodes
  const collapseAll = useCallback(() => {
    setExpandedIds(new Set());
  }, []);

  // Get flattened visible rows based on current expansion state
  const visibleRows = flattenTree(treeData, expandedIds);

  return {
    expandedIds,
    toggleExpanded,
    expandAll,
    collapseAll,
    visibleRows
  };
}

export default useTreeState;

