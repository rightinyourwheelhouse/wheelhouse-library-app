import styled from 'styled-components';

import { darken, lighten } from 'polished';
import colors from '../../styles/colors';

export const BaseButton = styled.button`
  position: relative;
  padding: 16px;
  border-radius: 5px;
  border: 0;
  outline: 0;
  cursor: pointer;

  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;

  background-color: black;
  color: white;

  &.primary {
    background-color: ${colors.primary};
    box-shadow: 0 6px ${darken('0.2', colors.primary)};
    color: white;

    &:active {
      box-shadow: 0 2px ${darken('0.2', colors.primary)};
      top: 4px;
    }
  }

  &.secondary {
    color: white;
    background-color: ${lighten('0.2', colors.secundary)};
    box-shadow: 0 6px ${lighten('0.1', colors.secundary)};

    &:active {
      top: 4px;
      box-shadow: 0 2px ${lighten('0.1', colors.secundary)};
    }
  }
`;

export default {
  BaseButton,
};
