
import './App.css';
import Home from './components/Home';
import {Routes, Route } from 'react-router-dom';
import NewsDisplay from './components/directpages/news';
import NoFound from './components/directpages/nofoundpage';
import News1 from './components/directpages/news1';
import News2 from './components/directpages/news2';
import ListenLive from './components/directpages/listenlive';
import Programs from './components/directpages/programs';
import NewsPage from './components/directpages/newspage';
import Schedule from './components/directpages/schedule';
import Player from './components/directpages/player';
import GetJobs from './components/directpages/getjobdetails';
import ShowJobDetails from './components/directpages/showjobdetails';
import News from './components/news/newss';
import SearchData from './components/directpages/searchdata';
import AboutUs from './components/directpages/aboutus';
import AdvertRAte from './components/directpages/Advertrate';
import Program2 from './components/directpages/program2';
import Program3 from './components/directpages/program3';
import Program4 from './components/directpages/program4';


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
        <Route path='/newspage' element={<NewsPage />} />
        <Route path='/newspage-1' element={<NewsPage />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/player' element={<Player />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/getjobs' element={<GetJobs />} />
        <Route path='/showjobdetails' element={<ShowJobDetails />} />
        <Route path='/newspage' element={<NewsPage />} />
        <Route path='/news' element={<News />} />
        <Route path='/searchdata' element={<SearchData />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/advertrate' element={<AdvertRAte />} />
        <Route path='/program2' element={<Program2 />} />
        <Route path='/program3' element={<Program3 />} />
        <Route path='/program4' element={<Program4 />} />
        


        
        







      </Routes>


   </>
  )
}

 export default App;
