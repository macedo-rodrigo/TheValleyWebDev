import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import News from './Components/News/News';
import NewsTopics from './Components/News/NewsTopics';
import { Container, Flex } from '@chakra-ui/react';

function App() {
  return (
    <Container className="app">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/news-home">News</NavLink>
        <NavLink to="/news/sport">Sport</NavLink>
        <NavLink to="/news/economics">Economy</NavLink>
        <NavLink to="/news/tech">Technology</NavLink>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/news-home" element={<News></News>}></Route>
          <Route path="/news/:topic" element={<NewsTopics></NewsTopics>}></Route>
        </Routes>
    </Container>
  );
}

export default App;
