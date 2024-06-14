import { GlovalProviders } from "./context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactionForm";
function App() {
  return (
    <GlovalProviders>
      <Header />
      <Balance />
      <TransactionForm />
      <h1>Hello Word</h1>
    </GlovalProviders>
  );
}

export default App;
