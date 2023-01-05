
import './App.css';
import Home from './components/Home';
import {Routes, Route } from 'react-router-dom';
import NewsDisplay from './components/directpages/news';
import NoFound from './components/directpages/nofoundpage';
import News1 from './components/directpages/news1';
import News2 from './components/directpages/news2';
import ListenLive from './components/directpages/listenlive';
import Programs from './components/directpages/programs';



function App() {
  return (
   <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<NewsDisplay />} />
        <Route path='*' element={<NoFound />} />
        <Route path='/news1' element={<News1 />} />
        <Route path='/news2' element={<News2 />} />
        <Route path='/listenlive' element={<ListenLive />} />
        <Route path='/programs' element={<Programs />} />





      </Routes>


   </>
  )
}

 export default App;
