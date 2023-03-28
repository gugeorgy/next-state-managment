import React from 'react';
import { useDebounce } from 'usehooks-ts';

export default function useSearchInput<T>(value: T) {
  const debouncedSearch = useDebounce(search, 500);
}
