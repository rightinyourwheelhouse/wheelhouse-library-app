import styled from 'styled-components';

import { darken, lighten } from 'polished';
import colors from '../../styles/colors';

const shadowSize = 6;
const shadowSizePressed = 2;
const shadowDifference = shadowSize - shadowSizePressed;

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
    box-shadow: 0 ${shadowSize}px ${darken('0.2', colors.primary)};
    color: white;

    &:active {
      box-shadow: 0 ${shadowSizePressed}px ${darken('0.2', colors.primary)};
      top: ${shadowDifference}px;
    }
  }

  &.secondary {
    color: white;
    background-color: ${lighten('0.2', colors.secundary)};
    box-shadow: 0 ${shadowSize}px ${lighten('0.1', colors.secundary)};

    &:active {
      top: ${shadowDifference}px;
      box-shadow: 0 ${shadowSizePressed}px ${lighten('0.1', colors.secundary)};
    }
  }
`;

export const ActionBaseButton = styled(BaseButton)`
  width: 90px;
  height: calc(100% - ${shadowSize}px);
  top: 0;
  margin-right: 5px;
  height: calc(100% - #{$margin-size * 2} - 6px);
  margin: $margin-size;

  &.info {
    background-color: $theme-secondary-color-lighter-30;
    box-shadow: 0 6px $theme-secondary-color;

    &:active {
      top: 4px;
      box-shadow: 0 2px $theme-secondary-color;
    }
  }
`;

export default BaseButton;
