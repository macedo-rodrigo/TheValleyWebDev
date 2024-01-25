import "./App.css";
import Footer from "./Components/Footer/footer";
import NavigationButton from "./Components/Header/header";
import MainContent from "./Components/Main/main";

function App() {
  return (
    <div className="App">
      <NavigationButton />

      <MainContent
          title="Ejercicio React"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor." />

      <Footer />
    </div>
  );
}

export default App;
