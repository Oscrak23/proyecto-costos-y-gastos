import React from "react";
// exportar el componente que se creo en el context
import { GlovalProviders } from "./context/GlobalState";
import Header from "./components/Header";

export default function App() {
  return (
    <GlovalProviders>
      <Header></Header>
      <h1>Hello</h1>
    </GlovalProviders>
  );
}
