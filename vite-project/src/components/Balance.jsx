// importamos otro hot de react usecontext
import { UseGlobalState } from "../context/GlobalState";
//import { Context } from "../context/GlobalState"; ya no se llama porque se llama el custom que se creo

function Balance() {
  //const data = useContext(Context); ya no se usa por la creacion del custom en globlalstate
  const data = UseGlobalState();
  return (
    <div>
      <h1>Balance</h1>
      <div>
        {/*para que convierta la dataa en texto */}
        {JSON.stringify(data)}
      </div>
    </div>
  );
}

export default Balance;
