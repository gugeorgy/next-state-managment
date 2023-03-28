import React from 'react';
import { Badge, HStack } from '@chakra-ui/react';
import type { Pokemon } from '@/lib/data/pokemon/types';
import { useAppSelector } from '@/store/hooks';
import { menuSelector } from '@/store/features/menu/menuSlice';
import { uuid } from '@/shared';
import DropdownMenu, { type DropdownMenuItem } from '../menu';

interface PokemonTypeProps {
  pokemon: Pokemon;
}

export default function PokemonType({ pokemon }: PokemonTypeProps) {
  const { id, type } = pokemon;
  const { isOpen, selectedId } = useAppSelector(menuSelector);
  // const dispatch = useAppDispatch();

  const isUpdadeAction = React.useMemo(
    () => isOpen && selectedId === id,
    [id, isOpen, selectedId],
  );

  const types: DropdownMenuItem<string>[] = [
    { item: 'grass' },
    { item: 'poison' },
    { item: 'fire' },
  ];

  return (
    <HStack>
      {type.map(pokemonType => (
        <Badge
          key={uuid()}
          colorScheme={`type.${pokemonType}`}
          variant="subtle"
        >
          {pokemonType}
        </Badge>
      ))}
      {isUpdadeAction ? (
        <DropdownMenu
          data={types}
          renderItem={({ item }) => (
            <Badge
              width="full"
              bg="transparent"
              color={`type.${item}.100`}
              _hover={{ color: `type.${item}.800` }}
            >
              {item}
            </Badge>
          )}
          labelButton="+"
          placement="bottom-start"
          variant="unstyled"
          buttonStyle={{
            bg: 'type.grass.100',
            textTransform: 'uppercase',
            fontSize: 'xs',
            fontWeight: 'bold',
            rounded: 'sm',
            paddingRight: '1',
            paddingLeft: '1',
            color: 'white',
          }}
          itemStyle={{
            padding: '0',
          }}
        />
      ) : null}
    </HStack>
  );
}
