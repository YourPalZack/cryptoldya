import { useState, useCallback } from 'react';

export function usePagination<T>(items: T[], initialPageSize: number = 10) {
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [hasMore, setHasMore] = useState(items.length > initialPageSize);

  const displayedItems = items.slice(0, pageSize);

  const loadMore = useCallback(() => {
    const nextPageSize = pageSize + initialPageSize;
    setPageSize(nextPageSize);
    setHasMore(items.length > nextPageSize);
  }, [items.length, pageSize, initialPageSize]);

  return {
    displayedItems,
    hasMore,
    loadMore
  };
}