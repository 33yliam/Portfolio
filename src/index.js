import React, { useEffect, useState } from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from "react-sidebar";
import { Scrollbar } from "react-scrollbars-custom";
import './styles/PathChangedLoading.css'
import './styles/Scrollbar.css'
import './views/themes/Dark.css'
import reportWebVitals from './reportWebVitals';
import NavBar from './components/navbar/NavBar';
import MobileNav from './components/navbar/MobileNav';
import About from './views/About';
import { useWindowSize } from './components/others/OtherFunctions';
import WumpusWorld from './views/WumpusWorld';
import SwitchTheme from './components/others/SwitchTheme';

const LOADING_TIME = 1500;

function Index() {
  const [showLoading, setShowLoading] = useState(true)
  const [path, setPath] = useState([])
  const width = useWindowSize();


  useEffect(() => {
    setTimeout(() => setShowLoading(false), LOADING_TIME)
  }, [])

  function pathChanged(newPath) {
    setPath(newPath)
    setShowLoading(true)
    window.scroll(0, 0)
    setTimeout(() => setShowLoading(false), LOADING_TIME)
  }
  return (
    <React.StrictMode>
      <Router>
        {showLoading ?
          <div className="loading">
            <div className='path-changed' >
              <img alt='yliam' />
              <div className='spin-load'>
              </div>
            </div>
          </div>
          :
          null
        }
        <Sidebar
          sidebarClassName='side-bar-class'
          sidebar={<NavBar path={path} smallScreen={width > 1200 ? false : true} />}
          docked={width > 1200 ? true : false}
        >
          <Scrollbar style={{ height: '100vh', width: '100%' }}
            scrollTop={0}
            noDefaultStyles={false}
            trackYProps={{ className: "trackY" }}
            thumbYProps={{ className: "thumbY" }}
            trackXProps={{ className: "trackX" }}
          >
            <MobileNav path={path} smallScreen={width > 1200 ? false : true} />
            <PathTracker pathChangedFun={pathChanged} />
            <SwitchTheme />
            <MyRoutes />
          </Scrollbar>
        </Sidebar>
      </Router>

    </React.StrictMode>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);



function MyRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/p/wumpus-world" element={<WumpusWorld />} />
      <Route path="*" element={<App />} />
    </Routes>
  )
}

function PathTracker({ pathChangedFun }) {
  const { pathname } = useLocation();

  useEffect(() => {
    let path = pathname.split('/')
    if (pathname !== '/')
      pathChangedFun(path)
    else
      pathChangedFun([])
  }, [pathname])
  return (null)
}

reportWebVitals();
