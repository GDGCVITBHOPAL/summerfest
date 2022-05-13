import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Sections from './pages/Sections';

// import PageFooter from './components/PageFooter';

function App() {
  React.useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://apply.devfolio.co/v2/sdk.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      }
    }, []);
  return (
    <div className="App">
      <HomePage/>
      <AboutPage/>
      <Sections/>
    </div>
  );
}

export default App;
