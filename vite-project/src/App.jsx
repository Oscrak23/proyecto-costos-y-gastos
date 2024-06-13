import React from "react";
// exportar el componente que se creo en el context
import { GlovalProviders } from "./context/GlobalState";

export default function App() {
  return (
    <GlovalProviders>
      <h1>Hello Word</h1>
    </GlovalProviders>
  );
}
