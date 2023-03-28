'use client';

import React from 'react';
import {
  BsInputCursor,
  BsThreeDotsVertical,
  BsTrash3,
} from 'react-icons/bs';

import { AiOutlineClose } from 'react-icons/ai';
import { Flex, Icon, IconButton, Text } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  menuClose,
  menuOpen,
  menuSelector,
} from '@/store/features/menu/menuSlice';
import DropdownMenu, { type DropdownMenuItem } from '@/components/menu';

interface PokemonMenuProps {
  pokemonId: string;
}

export default function PokemonMenu({ pokemonId }: PokemonMenuProps) {
  const { isOpen, selectedId } = useAppSelector(menuSelector);
  const dispatch = useAppDispatch();

  const updateOpen = () => {
    dispatch(menuOpen(pokemonId));
  };

  const updateClose = () => {
    dispatch(menuClose());
  };

  const isUpdadeAction = React.useMemo(
    () => isOpen && selectedId === pokemonId,
    [pokemonId, isOpen, selectedId],
  );

  const options: DropdownMenuItem<string>[] = [
    { item: 'update', icon: BsInputCursor, onPress: updateOpen },
    {
      item: 'delete',
      icon: BsTrash3,
      onPress: () => {},
    },
  ];

  return (
    <Flex justify="center">
      {isUpdadeAction ? (
        <IconButton
          aria-label="Actions"
          icon={<Icon as={AiOutlineClose} />}
          variant="unstyled"
          color="red.400"
          onClick={updateClose}
        />
      ) : (
        <DropdownMenu
          data={options}
          renderItem={({ item }) => <Text>{item}</Text>}
          iconButton={BsThreeDotsVertical}
          iconColor="blue"
        />
      )}
    </Flex>
  );
}
