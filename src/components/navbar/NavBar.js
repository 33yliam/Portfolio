import React from 'react';
import { FaLinkedinIn, FaEnvelope, FaGithub } from 'react-icons/fa';
import { VscChromeClose } from 'react-icons/vsc'
import { Link } from 'react-router-dom';
import { Scrollbar } from "react-scrollbars-custom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import '../../styles/Sidebar.css'
const navIconSize = 30;

export default function NavBar({ smallScreen, menuIsOpen, path }) {
  function scrollToID(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
  return (
    <ProSidebar collapsed={false}
      defaultOpen>
      <SidebarHeader>
        {smallScreen ?
          <VscChromeClose
            className='closeBTN' color='white' size={30}
            onClick={() => menuIsOpen(false)} />
          :
          null
        }
        <Link to="/"><img style={{ marginTop: smallScreen ? 50 : 0 }} alt='' /></Link>
        <div style={{ textAlign: 'center', marginBottom: 15, fontStyle: 'italic' }}>Software Developer</div>
      </SidebarHeader>
      <SidebarContent>
        <Scrollbar style={{ height: '100%', width: '100%', }}
          trackYProps={{ className: "trackY" }}
          thumbYProps={{ className: "thumbY" }}
          trackXProps={{ className: "trackX" }}
        >
          <Menu>
            <MenuItem>About<Link to="/about" /></MenuItem>
            {path.length === 0 ?
              <>
                <MenuItem onClick={() => scrollToID('work')}>Work</MenuItem>
                <MenuItem onClick={() => scrollToID('skills')}>Skills</MenuItem>
              </>
              :
              <>
                <MenuItem><Link to="/" />Portfolio</MenuItem>
              </>
            }
            <MenuItem><a
              href="https://docs.google.com/document/d/1xKcPOotR0tiwUWI1LxzAQXxUhM7U1jHsyaPE-geispw/edit?usp=sharing"
              target={'_blank'} rel="noopener noreferrer" style={{ color: 'white' }}>Resume</a></MenuItem>

          </Menu>
        </Scrollbar>
      </SidebarContent>
      <SidebarFooter style={{ textAlign: 'center' }}>
        <h2>CONTACT</h2>
        <div
          className="nav-footer-links" style={{ padding: 10 }}>
          <a
            href="https://www.linkedin.com/in/33yliam/"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-btn"
          >
            <FaLinkedinIn size={navIconSize} color='white' style={{ background: '#008cff' }} />
          </a>
          <a
            href="https://github.com/33yliam"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-btn"
          >
            <div style={{ background: '#fff', width: navIconSize, borderRadius: '50%' }}>
              <FaGithub size={navIconSize} color='black' />
            </div>
          </a>
          <a
            href="mailto:33yliam@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-btn"
          >
            <FaEnvelope size={navIconSize} color='#fff' />
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  )
}