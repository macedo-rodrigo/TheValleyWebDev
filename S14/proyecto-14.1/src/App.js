import React from 'react';
import './App.scss';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import Spanish from '../src/Lang/es.json';
import French from '../src/Lang/fr.json';
import English from '../src/Lang/en.json';
import { IntlProvider } from 'react-intl';

const locale = navigator.language;
let defaultMessages = Spanish;
switch (locale) {
  case 'fr-FR':
    defaultMessages  = French;
    break;
  case 'en-EN':
    defaultMessages  = English;
    break;
  case 'es-ES':
    defaultMessages  = Spanish;
    break;
  default:
    defaultMessages  = English;
}

function App() {
  const [messages, setMessages] = React.useState(defaultMessages);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className='App'>
        <RegisterForm />
      </div>
      
      <h2>Language selector</h2>
      <button onClick={() => setMessages(Spanish)}>Spanish</button>
      <button onClick={() => setMessages(English)}>English</button>
      <button onClick={() => setMessages(French)}>French</button>
    </IntlProvider>
  );
}

export default App;
