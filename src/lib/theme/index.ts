// My main theme entrypoint

import { extendTheme } from '@chakra-ui/react';
import styles from './style';

const colors = {
  base: '#333333',
  body: '#F7F7F7',
  type: {
    bug: {
      100: '#A8B820',
      500: '#A8B820',
      800: '#6D7815',
    },
    dark: {
      100: '#705848',
      500: '#705848',
      800: '#49392F',
    },
    dragon: {
      100: '#7038F8',
      500: '#7038F8',
      800: '#4924A1',
    },
    electric: {
      100: '#F8D030',
      500: '#F8D030',
      800: '#A1871F',
    },
    fairy: {
      100: '#EE99AC',
      500: '#EE99AC',
      800: '#9B6470',
    },
    fighting: {
      100: '#C03028',
      500: '#C03028',
      800: '#7D1F1A',
    },
    fire: {
      100: '#F08030',
      500: '#F08030',
      800: '#9C531F',
    },
    flying: {
      100: '#A890F0',
      500: '#A890F0',
      800: '#6D5E9C',
    },
    ghost: {
      100: '#705898',
      500: '#705898',
      800: '#493963',
    },
    grass: {
      100: '#78C850',
      500: '#78C850',
      800: '#A7DB8D',
    },
    ground: {
      100: '#E0C068',
      500: '#E0C068',
      800: '#927D44',
    },
    ice: {
      100: '#98D8D8',
      500: '#98D8D8',
      800: '#638D8D',
    },
    normal: {
      100: '#A8A878',
      500: '#A8A878',
      800: '#6D6D4E',
    },
    poison: {
      100: '#A040A0',
      500: '#A040A0',
      800: '#682A68',
    },
    psychic: {
      100: '#F85888',
      500: '#F85888',
      800: '#A13959',
    },
    rock: {
      100: '#B8A038',
      500: '#B8A038',
      800: '#786824',
    },
    steel: {
      100: '#B8B8D0',
      500: '#B8B8D0',
      800: '#787887',
    },
    water: {
      100: '#6890F0',
      500: '#6890F0',
      800: '#445E9C',
    },
  },
};

const layerStyles = {};

const overrides = {
  colors,
  styles,
  layerStyles,
  components: {},
};

export default extendTheme(overrides);
