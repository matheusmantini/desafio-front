import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => { 
  const [userLoginDetails, setUserLoginDetails] = useState({email: 'michaelb@jordan.com', password: '123456', userName: 'Michael', phone:'+55 31 9 4002 8922', nationality: 'Brasileiro', editable: false, color: '#42C1C7'});

  const states = { userLoginDetails };
  const setters = { setUserLoginDetails };
  
  return (
    <GlobalStateContext.Provider value={{ states, setters }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
