'use client';

import React from 'react';
import { Avatar, HStack, Input, Stack, Text } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { menuClose, menuSelector } from '@/store/features/menu/menuSlice';
import type { Pokemon } from '@/lib/data/pokemon/types';

interface ProfileProps {
  pokemon: Pokemon;
}

export default function PokemonProfile({ pokemon }: ProfileProps) {
  const { category, id, name, url } = pokemon;
  const { isOpen, selectedId } = useAppSelector(menuSelector);
  const dispatch = useAppDispatch();

  const isUpdated = React.useMemo(
    () => isOpen && selectedId === id,
    [id, isOpen, selectedId],
  );

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      dispatch(menuClose());
    }
  };

  return (
    <HStack>
      <Avatar
        name={name}
        src={url}
        borderWidth="1px"
        padding="1"
        borderColor="gray.100"
      />
      <Stack spacing="0px" textTransform="capitalize">
        {isUpdated ? (
          <>
            <Input
              type="text"
              defaultValue={name}
              onKeyDown={handleKeyPress}
              fontWeight="bold"
              fontSize="xl"
              variant="unstyled"
              rounded="0px"
              autoFocus
            />
            <Input
              type="text"
              defaultValue={category}
              onKeyDown={handleKeyPress}
              variant="unstyled"
              rounded="0px"
              fontSize="sm"
            />
          </>
        ) : (
          <>
            <Text fontWeight="bold" fontSize="xl">
              {name}
            </Text>
            <Text>{category} pokemon</Text>
          </>
        )}
      </Stack>
    </HStack>
  );
}
