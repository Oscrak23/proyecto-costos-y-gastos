// //importamos el hoot de react creatcontext
import { createContext, useContext } from "react";
//declaramos la variable que va a crear un objeto del hoot de react
export const Context = createContext();

export const useGlobalState = () => {
  /*basicamente aca estamos creando un custom para volver a traer la data y no tener que exportar
  cada pagina si no solo usando la funcion (useGlobalState)que volvimos a declara context pero en minuscula*/
  const context = useContext(Context);
  return context;
};
/*esto crea un componente que engloba a otros componentes y permite que cualquier dato que
se ponga en el provider sea ascedido */
export const GlovalProviders = ({ children }) => {
  return <Context.Provider value={{ total: 100 }}>{children}</Context.Provider>;
};
