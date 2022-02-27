import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Sections from './pages/Sections';
// import PageFooter from './components/PageFooter';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <AboutPage/>

      <Sections/>

      {/* <PageFooter/> */}

      <a id="mlh-trust-badge" href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white" target="_blank" rel="noopener noreferrer"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg" alt="Major League Hacking 2021 Hackathon Season" /></a>
    </div>
  );
}

export default App;
