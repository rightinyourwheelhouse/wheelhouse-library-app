import styled from 'styled-components';

const height = '50px';

export const NavigationContainer = styled.nav`
  box-shadow: 0 5px 0 #ebebeb !important;
  position: fixed;
  top: 0;
  z-index: 99;
  background: #fff;
  width: 100%;
  line-height: 1.7;
  display: flex;
  height: ${height};
  justify-content: space-between;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;

  svg {
    color: #BDBDBD;
  }
`;

export const Spacer = styled.div`
  height: ${height};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    margin-left: 12px;
    display: inline-block;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export default NavigationContainer;
