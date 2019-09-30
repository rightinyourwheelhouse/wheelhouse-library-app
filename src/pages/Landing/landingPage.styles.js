/* eslint-disable global-require */
import styled from 'styled-components';

export const Hero = styled.div`
  height: 100%;
  overflow: hidden;

  background-image: url(${require('../../img/library.jpg')});
  background-size: auto 100%;
`;

export const InnerContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.47);
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 50px 10px;
  width: 100%;

  h1 {
    font-size: 3.75rem;
    font-weight: 700;
    line-height: 3rem;
    text-align: center;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.875rem;
    margin-top: 30px;
  }
`;

export const Disclaimer = styled.p`
  text-align: center;

  span {
    margin: 0 8px;
  }

  strong {
    font-weight: 700;
  }
`;
