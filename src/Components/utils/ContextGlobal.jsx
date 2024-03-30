import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { reducer } from "../../Reducer/reducer";

const ContextGlobal = createContext()

const initialState = {
  theme: "light", 
  data: [],
  favs: [],
}

export const ContextProvider = ({ children }) => {  
  const [state, dispatch] = useReducer(reducer, initialState)  

  const toggleTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'CHANGE_THEME', payload: newTheme });
  };
  
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      dispatch({ type: 'GET_DATA', payload: res.data })
    })
    .catch((error) => {      
      console.error("Error fetching data:", error);
    });    
  }, []) 

  return (
    <ContextGlobal.Provider value={{state, dispatch, toggleTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextGlobal;

export const useContextGlobal = () => useContext(ContextGlobal);