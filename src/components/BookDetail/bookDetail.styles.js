import styled from 'styled-components';

export const OuterContainer = styled.article`
  background: #fff;
  min-height: 100vh;

  @media print {
    h1, h2, span {
      display: none;
    }
  }
`;

export const Container = styled.div`
  padding: 30px 18px;
  text-align: center;

  h1 {
    font-size: 1.6rem;
    margin-bottom: 12px;
    margin: 0 auto;
    max-width: 75%;
    min-width: 75%;
    text-align: center;
    margin-bottom: 12px;
  }

  h2 {
    font-size: 1.3rem !important;
    font-weight: 300 !important;
    margin-bottom: 60px !important;
  }
`;

export const Author = styled.span`
  font-weight: bold;
`;
