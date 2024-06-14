// como en el global creamos una funcion con la data aca la llamamos y no necesitamos importar las que habian
import { useGlobalState } from "../context/GlobalState";
// import { useContext } from "react";
// import { Context } from "../context/GlobalState"; //ya no se llama porque se llama el custom que se creo

function Balance() {
  //  const data = useContext(Context); //ya no se usa por la creacion del custom en globlalstate
  const data = useGlobalState(); // funcion que creamos en el global con todos los datos ya incorporados

  return (
    <div>
      <h1>Balance</h1>
      <div>
        {/* para que convierta la dataa en texto  */}
        {JSON.stringify(data)}
      </div>
    </div>
  );
}

export default Balance;
