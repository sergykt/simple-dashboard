import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { type Order, type SortBy } from '@/shared/api';

const getSearch = (searchParams: URLSearchParams) => {
  const search = searchParams.get('search') ?? '';
  return search;
};

const getSortBy = (searchParams: URLSearchParams) => {
  const sortBy = searchParams.get('sort') ?? 'name';
  return sortBy as SortBy;
};

const getOrder = (searchParams: URLSearchParams) => {
  const order = searchParams.get('order') ?? 'asc';
  return order as Order;
};

export const useFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = getSearch(searchParams);
  const sortBy = getSortBy(searchParams);
  const order = getOrder(searchParams);

  const toggleOrder = useCallback(
    (newSortBy: SortBy) => {
      setSearchParams((prev) => {
        const prevSortBy = getSortBy(prev);
        const prevOrder = getOrder(prev);
        if (prevSortBy === newSortBy) {
          prev.set('order', prevOrder === 'asc' ? 'desc' : 'asc');
        } else {
          prev.set('sort', newSortBy);
          prev.set('order', 'asc');
        }

        return prev;
      });
    },
    [setSearchParams],
  );

  const setSearch = useCallback(
    (newSearch: string) => {
      setSearchParams((prev) => {
        prev.set('search', newSearch.trim());
        return prev;
      });
    },
    [setSearchParams],
  );

  return { search, sortBy, order, toggleOrder, setSearch };
};
