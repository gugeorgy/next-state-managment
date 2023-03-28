'use client';

import React from 'react';
import type { IconType } from 'react-icons';
import {
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  type PlacementWithLogical,
  Portal,
  Square,
  Button,
  type SystemStyleObject,
} from '@chakra-ui/react';
import { uuid } from '@/shared';

interface ListRenderItemInfo<TItem> {
  item: TItem;
  index: number;
}

type ListRenderItem<TItem> = (
  info: ListRenderItemInfo<TItem>,
) => React.ReactElement | null;

export interface DropdownMenuItem<TItem> {
  item: TItem;
  icon?: IconType;
  onPress?: () => void;
}

interface DropdownMenuProps<TItem> {
  data: ReadonlyArray<DropdownMenuItem<TItem>> | null | undefined;
  renderItem: ListRenderItem<TItem> | null | undefined;
  iconButton?: IconType;
  labelButton?: string;
  iconColor?: string;
  buttonStyle?: SystemStyleObject;
  itemStyle?: SystemStyleObject;
  placement?: PlacementWithLogical;
  variant?: 'link' | 'outline' | 'ghost' | 'solid' | 'unstyled';
  colorScheme?:
    | 'whiteAlpha'
    | 'blackAlpha'
    | 'gray'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'cyan'
    | 'purple'
    | 'pink'
    | 'linkedin'
    | 'facebook'
    | 'messenger'
    | 'whatsapp'
    | 'twitter'
    | 'telegram';
}

export default function DropdownMenu<TItem>({
  buttonStyle,
  colorScheme,
  data,
  itemStyle,
  iconButton,
  iconColor,
  labelButton,
  placement,
  renderItem,
  variant,
}: DropdownMenuProps<TItem>) {
  const rowRenderWithIndex = (index: number) => {
    return renderItem?.({
      item: data![index].item,
      index,
    });
  };

  return (
    <Menu placement={placement ?? 'start'} isLazy>
      <MenuButton
        as={Button}
        colorScheme={colorScheme}
        variant={variant}
        sx={{
          ...(variant === 'unstyled'
            ? { minW: '0px', h: 'max', m: '0' }
            : undefined),
          ...buttonStyle,
        }}
      >
        {iconButton ? (
          <Square>
            <Icon as={iconButton} color={iconColor} />
          </Square>
        ) : (
          labelButton
        )}
      </MenuButton>
      <Portal>
        <MenuList minW="0px">
          {data?.map((itemData, index) => (
            <MenuItem
              key={uuid()}
              onClick={itemData.onPress}
              icon={
                itemData.icon ? (
                  <Square>
                    <Icon as={itemData.icon} />
                  </Square>
                ) : undefined
              }
              sx={{ ...itemStyle }}
            >
              {rowRenderWithIndex(index)}
            </MenuItem>
          ))}
        </MenuList>
      </Portal>
    </Menu>
  );
}
