'use client';

import React from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  searchSelector,
  setSearch,
} from '@/store/features/search/searchSlice';
// import pokemonApi from '@/store/services/pokemon';

export default function SearchInput() {
  const dispatch = useAppDispatch();
  const search = useAppSelector(searchSelector);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(event.target.value));
  };

  return (
    <div>
      <input
        type="text"
        style={{ border: '1px solid' }}
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}
