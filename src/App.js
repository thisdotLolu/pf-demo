import React, {useEffect, useRef} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import './App.css'
// import { UserContext } from './context/UserContext';
import { UserProvider } from './context/UserContext';


// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views
import Home from './views/Home';
import SearchAnalyzer from './views/SearchAnalyzer';

// Initialize Google Analytics
if(process.env.REACT_APP_GA_CODE) {
  ReactGA.initialize(process.env.REACT_APP_GA_CODE);
}
const trackPage = page => {
  if(process.env.REACT_APP_GA_CODE){
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }
};
const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <UserProvider>
      <ScrollReveal
      ref={childRef}
      children={() => (
          <LayoutDefault>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/search" element={<SearchAnalyzer/>}/>
              {/* <Route path="/" element={<DailyPicks/>} /> */}
            </Routes>
          </LayoutDefault>
      )} />
    </UserProvider>
    
  );
}

export default App;
