import React, { useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import userPhoto from '../../assets/user-photo.png';
import GlobalStateContext from '../../context/GlobalStateContext';
import { Container, StyledCard, UserImage, ContainerForm, InputLabel, ContainerInputs, InputForm, SelectForm, ContainerOutterSwitch, ContainerInnerSwitch, LogoutIcon, EditImage } from './Styled';
import useForm from '../../hooks/useForm';
import ColorPalette from '../../components/ColorPalette/ColorPalette';
import styled from 'styled-components';
import { primaryColor } from '../../constants/color';


const ContainerPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  border-radius: 24px 24px 0 0;
  background-color: ${primaryColor};
  ${(props) => {    
    if(props.color === '#42C1C7'){
      return 'background-color: #42C1C7'
    }else if(props.color === '#FEFE33'){
      return 'background-color: #FEFE33'
    }else if(props.color === '#FABC02'){
      return 'background-color: #FABC02'
    }else if(props.color === '#FB9902'){
      return 'background-color: #FB9902'
    }else if(props.color === '#FD5308'){
      return 'background-color: #FD5308'
    }else if(props.color === '#FE2712'){
      return 'background-color: #FE2712'
    }else if(props.color === '#A7194B'){
      return 'background-color: #A7194B'
    }else if(props.color === '#8601AF'){
      return 'background-color: #8601AF'
    }else if(props.color === '#3D01A'){
      return 'background-color: #3D01A4'
    }else if(props.color === '#0247FE'){
      return 'background-color: #0247FE'
    }else if(props.color === '#0392C'){
      return 'background-color: #0392CE'
    }else if(props.color === '#66B03'){
      return 'background-color: #66B032'
    }else if(props.color === '#D0EA2B'){
      return 'background-color: #D0EA2B'
    }     
  }};
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  border-radius: 0;
  }
`;

const UserInfoPage = () => {
  const navigate = useNavigate();
 
  const { states, setters } = useContext(GlobalStateContext);
  const { userLoginDetails } = states;
  const { setUserLoginDetails } = setters;

  const { form, onChangeForm, cleanFields } = useForm({ email: userLoginDetails.email, name: userLoginDetails.userName, phone: userLoginDetails.phone, nationality: userLoginDetails.nationality});

  useEffect(()=>{
      document.getElementById('name').disabled = true;
      document.getElementById('phone').disabled = true;
      document.getElementById('email').disabled = true;
      document.getElementById('nationality').disabled = true;
      document.getElementById('editImageButton').style.display = 'none';
      
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("Não está logado!!!");
      navigate("/login");
    }
  },[])

  let editable = userLoginDetails.editable;

  
  const handleToggleSwitch = () => {
    if(!editable){
      setUserLoginDetails({userName: form.name, phone: form.phone, email: form.email, nationality: form.nationality, editable: true})
      document.getElementById('name').disabled = false;
      document.getElementById('phone').disabled = false;
      document.getElementById('email').disabled = false;
      document.getElementById('nationality').disabled = false;
      document.getElementById('editImageButton').style.display = 'block';
    }else{
      setUserLoginDetails({userName: form.name, phone: form.phone, email: form.email, nationality: form.nationality, editable: false})
      document.getElementById('name').disabled = true;
      document.getElementById('phone').disabled = true;
      document.getElementById('email').disabled = true;
      document.getElementById('nationality').disabled = true;
      document.getElementById('editImageButton').style.display = 'none';
    }
  }

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }

  const onClickChangePhoto = (event) => {
    document.getElementById('fileid').click();
  }
 
  return (
    <Container>      
      <StyledCard>
        <ContainerPhoto id="containerUserDetails" color={userLoginDetails.color}>
          <LogoutIcon onClick={logout}>
            <i className="fas fa-sign-out"></i>
          </LogoutIcon>
        </ContainerPhoto>
        <UserImage id='userPhoto' src={userPhoto} alt="user-photo" />
        <EditImage id='editImageButton' onClick={onClickChangePhoto}>
          <i className="fas fa-pen"></i>
        </EditImage>
        <input id='fileid' type='file' hidden/>
        <ContainerOutterSwitch>          
          <ContainerInnerSwitch>
            <label className="switch">
              <input type="checkbox" onClick={handleToggleSwitch} value={editable} />
              <span className="slider round"></span>
            </label>
            <label>Modo editor</label>
          </ContainerInnerSwitch>
        </ContainerOutterSwitch>
        <ContainerForm>
          <ContainerInputs>
            <InputLabel>Nome</InputLabel>
            <InputForm
              id='name'
              type="text"
              name="name" 
              value={form.name} 
              onChange={onChangeForm} 
            />
            <InputLabel>Telefone</InputLabel>
            <InputForm
              id='phone'
              type="text"
              name="phone" 
              value={form.phone} 
              onChange={onChangeForm} 
            />
            <InputLabel>E-mail</InputLabel>
            <InputForm
              id='email'
              type="email"
              name="email" 
              value={form.email} 
              onChange={onChangeForm} 
            />
            <InputLabel>Nacionalidade</InputLabel>
            <SelectForm
              id='nationality'
              name="nationality" 
              value={form.nationality}
              onChange={onChangeForm} 
            >
              <option value="Brasileiro">Brasileiro</option>
              <option value="Afegão">Afegão</option>
              <option value="Alemão">Alemão</option>
              <option value="Alemão">Americano</option>
              <option value="Angolano">Angolano</option>
              <option value="Antiguano">Antiguano</option>
              <option value="Árabe">Árabe</option>
              <option value="Argélia">Argélia</option>
              <option value="Argentino">Argentino</option>
              <option value="Armeno">Armeno</option>
              <option value="Australiano">Australiano</option>
              <option value="Austríaco">Austríaco</option>
              <option value="Bahamense">Bahamense</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbadiano">Barbadiano</option>
              <option value="Bechuano">Bechuano</option>
              <option value="Belga">Belga</option>
              <option value="Belizenho">Belizenho</option>
              <option value="Boliviano">Boliviano</option>
              <option value="Britânico">Britânico</option>
              <option value="Camaronense">Camaronense</option>
              <option value="Canadense">Canadense</option>
              <option value="Coreano">Coreano</option>
              <option value="Chileno">Chileno</option>
              <option value="Chinês">Chinês</option>
              <option value="Cingalês">Cingalês</option>
              <option value="Colombiano">Colombiano</option>
              <option value="Comorense">Comorense</option>
              <option value="Costarriquenho">Costarriquenho</option>
              <option value="Croata">Croata</option>
              <option value="Cubano">Cubano</option>
              <option value="Dinamarquês">Dinamarquês</option>
              <option value="Dominicana">Dominicana</option>
              <option value="Dominicano">Dominicano</option>
              <option value="Egípcio">Egípcio</option>
              <option value="Emiratense">Emiratense</option>
              <option value="Equatoriano">Equatoriano</option>
              <option value="Escocês">Escocês</option>
              <option value="Eslovaco">Eslovaco</option>
              <option value="Esloveno">Esloveno</option>
              <option value="Espanhol">Espanhol</option>
              <option value="Estadounidense">Estadounidense</option>
              <option value="Francês">Francês</option>
              <option value="Galês">Galês</option>
              <option value="Ganés">Ganés</option>
              <option value="Granadino">Granadino</option>
              <option value="Grego">Grego</option>
              <option value="Guatemalteco">Guatemalteco</option>
              <option value="Guianense">Guianense</option>
              <option value="Guianês">Guianês</option>
              <option value="Haitiano">Haitiano</option>
              <option value="Holandês">Holandês</option>
              <option value="Hondurenho">Hondurenho</option>
              <option value="Húngaro">Húngaro</option>
              <option value="Iemenita">Iemenita</option>
              <option value="Indiano">Indiano</option>
              <option value="Indonésio">Indonésio</option>
              <option value="Inglês">Inglês</option>
              <option value="Iraniano">Iraniano</option>
              <option value="Iraquiano">Iraquiano</option>
              <option value="Irlandês">Irlandês</option>
              <option value="Israelita">Israelita</option>
              <option value="Italiano">Italiano</option>
              <option value="Jamaicano">Jamaicano</option>
              <option value="Japonês">Japonês</option>
              <option value="Líbio">Líbio</option>
              <option value="Malaio">Malaio</option>
              <option value="Marfinense">Marfinense</option>
              <option value="Marroquino">Marroquino</option>
              <option value="Maubere">Maubere</option>
              <option value="Mexicano">Mexicano</option>
              <option value="Moçambicano">Moçambicano</option>
              <option value="Neozelandês">Neozelandês</option>
              <option value="Nepalês">Nepalês</option>
              <option value="Nicaraguense">Nicaraguense</option>
              <option value="Nigeriano">Nigeriano</option>
              <option value="Norte-coreano">Norte-coreano</option>
              <option value="Noruego">Noruego</option>
              <option value="Omanense">Omanense</option>
              <option value="Palestino">Palestino</option>
              <option value="Panamenho">Panamenho</option>
              <option value="Paquistanês">Paquistanês</option>
              <option value="Paraguaio">Paraguaio</option>
              <option value="Peruano">Peruano</option>
              <option value="Polonês">Polonês</option>
              <option value="Portorriquenho">Portorriquenho</option>
              <option value="Português">Português</option>
              <option value="Qatarense">Qatarense</option>
              <option value="Queniano">Queniano</option>
              <option value="Romeno">Romeno</option>
              <option value="Ruandês">Ruandês</option>
              <option value="Russo">Russo</option>
              <option value="Salvadorenho">Salvadorenho</option>
              <option value="Santa-lucense">Santa-lucense</option>
              <option value="São-cristovense">São-cristovense</option>
              <option value="São-vicentino">São-vicentino</option>
              <option value="Saudita">Saudita</option>
              <option value="Sérvio">Sérvio</option>
              <option value="Sírio">Sírio</option>
              <option value="Somali">Somali</option>
              <option value="Sueco">Sueco</option>
              <option value="Suíço">Suíço</option>
              <option value="Sul-africano">Sul-africano</option>
              <option value="Sul-coreano">Sul-coreano</option>
              <option value="Surinamês">Surinamês</option>
              <option value="Tailandês">Tailandês</option>
              <option value="Timorense">Timorense</option>
              <option value="Trindadense">Trindadense</option>
              <option value="Turco">Turco</option>
              <option value="Ucraniano">Ucraniano</option>
              <option value="Ugandense">Ugandense</option>
              <option value="Uruguaio">Uruguaio</option>
              <option value="Venezuelano">Venezuelano</option>
              <option value="Vietnamita">Vietnamita</option>
              <option value="Zimbabuense">Zimbabuense</option>
            </SelectForm>
          </ContainerInputs>
        </ContainerForm>
        {editable === true ? <ColorPalette/> : null}
      </StyledCard>
    </Container>
  )
}

export default UserInfoPage;
