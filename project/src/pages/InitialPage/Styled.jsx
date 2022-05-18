import styled from 'styled-components';
import { primaryColor, primaryColorHover } from '../../constants/color';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Card = styled.div`
  width: 787px;
  height: 782px;
  border-radius: 24px !important;
  background-color: ${primaryColor};
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  width: 100vw;
  height: 100vh;
  border-radius: 0 !important;
  }
  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
  width: 680px;
  height: 700px;
  }
  @media screen and (min-device-width : 1200px) and (max-device-width : 1500px) {
  width: 680px;
  height: 700px;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

export const LogoImage = styled.img`
  width: 100px;
`;
