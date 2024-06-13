//importamos el hoot de react creatcontext
import { createContext } from "react";

//declaramos la variable que va a crear un objeto del hoot de react
export const Context = createContext({ children });

/*esto crea un componente que engloba a otros componentes y permite que cualquier dato que
se ponga en el provider sea ascedido */
export const GlovalProviders = () => {
  return <Context.Provider value={{ total: 100 }}>{children}</Context.Provider>;
};
