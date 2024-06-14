import React from "react";
// exportar el componente que se creo en el context
import { GlovalProviders } from "./context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Transaction from "./components/transactionForm";

export default function App() {
  return (
    <GlovalProviders>
      <Header></Header>
      <Balance></Balance>
      <Transaction></Transaction>
      <h1>Hello</h1>
    </GlovalProviders>
  );
}
