import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Latest from './pages/Latest';      
import Home from './pages/Home';          
import Explore from './pages/explore';
import Login from './pages/login';
import Questionnaire from './pages/questionnaire';
import FAQ from './pages/faq';
import Contact from './pages/contact';
import About from './pages/about';
import Shooting from './pages/shooting';
import Football from './pages/football';
import Badminton from './pages/badminton';
import TableTennis from './pages/tabletennis';
import Tennis from './pages/tennis';
import Squash from './pages/squash';
import Archery from './pages/archery';
import Golf from './pages/golf';
import Javelin from './pages/javelinthrow';
import Boxing from './pages/boxing';
import Swimming from './pages/swimming';
import Discus from './pages/discus';
import Volleyball from './pages/volleyball';
import Basketball from './pages/basketball';
import Wrestling from './pages/wrestling';
import Skating from './pages/skating';
import Hammer from './pages/hammer';
import Hockey from './pages/hockey';
function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/latest" element={<Latest />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/shooting" element={<Shooting />} />
          <Route path="/football" element={<Football />} />
          <Route path="/badminton" element={<Badminton />} />
          <Route path="/tabletennis" element={<TableTennis />} />
          <Route path="/tennis" element={<Tennis />} />
          <Route path="/squash" element={<Squash />} />
          <Route path="/archery" element={<Archery />} />
          <Route path="/golf" element={<Golf />} />
          <Route path="/javelinthrow" element={<Javelin />} />
          <Route path="/boxing" element={<Boxing />} />
          <Route path="/swimming" element={<Swimming />} />
          <Route path="/discus" element={<Discus />} />
          <Route path="/volleyball" element={<Volleyball />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/wrestling" element={<Wrestling />} />
          <Route path="/skating" element={<Skating />} />
          <Route path="/hammer" element={<Hammer />} />
          <Route path="/hockey" element={<Hockey />} />
        </Routes>
      </div>
      <Footer/>
      
    </Router>
    
  );
}

export default App;
