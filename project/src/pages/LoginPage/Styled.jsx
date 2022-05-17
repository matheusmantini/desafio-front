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
  border-radius: 24px;
  background-color: white;
  position: absolute;
  box-shadow: 0 0 10px ${primaryColor};
`;

export const ContainerPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  border-radius: 24px 24px 0 0;
  background-color: ${primaryColor};
`;

export const UserImage = styled.img`
  width: 100px;
  background-color: white;
  border-radius: 50%;
  border: 3px solid white;
  position: relative;
  left: 50%;
  top: -7%;
  transform: translateX(-50%);
  box-shadow: 0 0 5px black;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-top: 120px;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 300px;
`;

export const InputForm = styled.input`
  height: 24px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 4px 8px;
  font-size: 16px;
  margin-bottom: 15px;
  outline-color: ${primaryColor};
`;

export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
  line-height: 24px;
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: -90%;
`;


export const ButtonForm = styled.button`
  width: 300px;
  background-color: ${primaryColor};
  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 10px 0;    
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.0025em;
  color: white;
  cursor: pointer;
  box-shadow: 1px 2px 5px black;
  outline-color: ${primaryColor};
  :hover{
    background-color: ${primaryColorHover};
  }
  :active{
    background-color: ${primaryColor};
  box-shadow: -1px -2px 5px black;
  }
`;





