import './App.css';
import BankAccount from './Components/BankAccount/BankAccount';
import Bidder from './Components/Pujas/Bidder';

function App() {
  return (
    <div className="app">
      <BankAccount />
      <hr/>
      <Bidder/>

    </div>
  );
}

export default App;
