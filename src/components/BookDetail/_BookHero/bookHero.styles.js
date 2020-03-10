import styled from 'styled-components';

export const OuterContainer = styled.div`
  box-shadow: inset 0 4px 20px rgba(0,0,0,.2);
  height: 400px;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media print {
    display: none;
  }
`;

export const Background = styled.header`
  background: ${({ img }) => `url(${img})`};
  background-size: cover;
  filter: blur(100px);
  height: 200%;
  width: 200%;
  left: -50%;
  top: -50%;
  position: absolute;
  z-index: 0;

`;

export const BookCover = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 75%;
  width: auto;
  z-index: 1;
  transform: translate(-50%, -50%);
`;
