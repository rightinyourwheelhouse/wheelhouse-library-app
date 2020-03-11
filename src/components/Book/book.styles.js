import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: calc(24px / 2 * -1);
  min-height: 100px;

  > * {
    flex-basis: 100px;
    flex-grow: 1;
    margin: calc(24px / 2);
  }

  > :last-child {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(50% - 24px);
  }
`;

export const Actions = styled.div`
  background: #333;
  box-sizing: border-box;
  height: calc(100%);
  opacity: 1;
  position: absolute;
  right: -212px;
  top: 0px;
  transition: all 0.3s;
  width: 200px;

  &:after{
    box-shadow: inset 1px 1px 10px rgba(0, 0, 0, 0.2);
    content: "";
    height: 100%;
    left:0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export const OuterContainer = styled.div`
  box-shadow: 0 2px 0 #ebebeb !important;
  display: flex;
  left: 0;
  margin: 0 12px;
  padding: 24px 12px;
  position: relative;
  transition: all 0.3s ease-in-out;

  &.expanded {
    left: -200px;

    > ${Actions} {
      box-shadow: inset 1px 1px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const Thumb = styled.div`
  overflow: hidden;
  border-radius: 12px;
  width: 100%;
  height: auto;

  img {
    width: 100%;
  }
`;

export const Details = styled.div`
  h2 {
    font-weight: normal !important;
    font-size: 1.1rem !important;
  }

  h3 {
    opacity: 0.7;
    font-weight: normal !important;
    font-size: 1rem !important;
  }
`;

export const ActionButton = styled.button`
  width: 100px;
  height: 100%;
  top: 0;
  background: #3B825B;
  color: #fff;
  border: 0;
  transition: all 0.3s;

  &:active {
    background: #57d96c;
  }

  &.info {
    background: #333;

    &:active {
      background: #333;
    }
  }
`;
