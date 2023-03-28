'use client';

import React from 'react';
import { useDebounce } from 'usehooks-ts';
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { searchSelector } from '@/store/features/search/searchSlice';
import { useAppSelector } from '@/store/hooks';
import pokemonApi from '@/store/services/pokemon';
import PokemonMenu from './menu';
import PokemonProfile from './profile';
import PokemonType from './type';

export default function PokemonTable() {
  const search = useAppSelector(searchSelector);
  const searchDebounce = useDebounce(search, 500);

  const { data: pokemons } =
    pokemonApi.useGetPokemonByNameQuery(searchDebounce);

  return (
    <main>
      <TableContainer>
        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Types</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {pokemons?.map(pokemon => (
              <Tr key={pokemon.id}>
                <Td>
                  <PokemonProfile pokemon={pokemon} />
                </Td>
                <Td>
                  <PokemonType pokemon={pokemon} />
                </Td>
                <Td>
                  <PokemonMenu pokemonId={pokemon.id} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </main>
  );
}
