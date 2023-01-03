import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Routes, Route } from 'react-router-dom';
import NewsDisplay from './components/directpages/news';
import NoFound from './components/directpages/nofoundpage';
import News1 from './components/directpages/news1';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/news' element={<NewsDisplay />} />
    <Route path='*' element={<NoFound/>} />
    <Route path='/news1' element={<News1/>} />


   </Routes>
   

   </>
  );
}

export default App;
