import { HashRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Slider from "./Components/Slider/Slider";
import images from "./images";

function App() {
  return (
    <div className="App">
      <h3>Tarea 14.1 Master WebDev - The Valley</h3>

      <HashRouter>
        <div>
          <Link to="/">Home</Link>
          <br />
          <Link to="/slides">Slides</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/slides" element={<Slider></Slider>} images={images}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
