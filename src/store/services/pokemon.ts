import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Pokemon } from '@/lib/data/pokemon/types';

// initialize an empty api service that we'll inject endpoints into later as needed
const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  tagTypes: ['Pokemon'],
  endpoints: builder => ({
    getPokemonByName: builder.query<Pokemon[], string>({
      query: arg => `search?name=${arg}`,
      providesTags: ['Pokemon'],
    }),
  }),
});

export default pokemonApi;
