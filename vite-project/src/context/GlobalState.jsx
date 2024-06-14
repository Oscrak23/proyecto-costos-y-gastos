//importamos el hoot de react creatcontext
import { createContext, useContext } from "react";

//declaramos la variable que va a crear un objeto del hoot de react
export const Context = createContext();
// aca se crea un custom para instanciar la data y no tener que usar el import
export const UseGlobalState = () => {
  const contextN = useContext(Context);
  return contextN;
};

/*esto crea un componente que engloba a otros componentes y permite que cualquier dato que
se ponga en el provider sea ascedido */
export const GlovalProviders = () => {
  return <Context.Provider value={{ total: 100 }}></Context.Provider>;
};
