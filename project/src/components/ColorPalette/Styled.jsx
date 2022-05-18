import styled from 'styled-components';
import { primaryColor, primaryColorHover } from '../../constants/color';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 4%;
  border-top: 1px solid ${primaryColor};
  width: 100%;
  position: absolute;
  bottom: 4%;
  transition: 0.5s ease-in-out;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  bottom: 0;
  padding-top: 0px;
  }
`;

export const Lista = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  flex-wrap: wrap;
  margin-bottom: 10px;
  }
`;
