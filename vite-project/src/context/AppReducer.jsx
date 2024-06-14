/* Creamos una funcion flecah y le enviamos los parametros de estado y una accion
el state es el arreglo vacio y la otra la accion que vamos a ejecutar */

// creamos un objeto con los tipos (tipe)-ADD TRANSACTION-CREO LA TRANSACCION
// {
//   type:"ADD TRANSACTION"
//   payload:-200
// }
export default (state, action) => {
  switch (action.type) {
    case "ADD TRANSACTION":
      return state;
    default:
      return state;
  }
};
