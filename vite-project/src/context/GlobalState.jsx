// //importamos el hoot de react creatcontext
import { createContext, useContext, useReducer } from "react";
//importamos el appreducer
import AppReducer from "./AppReducer";

// quitamos las [] del useREDUCER Y VAMOS A METERLAS EN UNA VARIABLE
const initialState = {
  transactions: [],
};

//declaramos la variable que va a crear un objeto del hoot de react
export const Context = createContext();

export const useGlobalState = () => {
  /*basicamente aca estamos creando un custom para volver a traer la data y no tener que exportar
  cada pagina si no solo usando la funcion (useGlobalState)que volvimos a declara context pero en minuscula*/
  const context = useContext(Context);
  return context;
};
/*esto crea un componente que engloba a otros componentes y permite que cualquier dato que
se ponga en el provider sea ascedido, mas adelante se le empiesan a pasar mas parametros ya no es total 100
si no un usestate con un arreglo dinamico, luego se cambia por el usereducer y se cambia el setstate por dispatch*/
export const GlovalProviders = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </Context.Provider>
  );
};
