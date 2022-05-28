import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'
import '../../styles/MobileNav.css'

import NavBar from './NavBar';

export default function MobileNav({ smallScreen, path }) {
    const { pathname } = useLocation();
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    function handleMenu(i) {
        setMenuIsOpen(i)
    }

    useEffect(() => {
        handleMenu(false)
    }, [pathname])

    return (
        smallScreen ?
            <Menu isOpen={menuIsOpen}
                onStateChange={(state) => handleMenu(state.isOpen)}>
                <NavBar smallScreen={smallScreen} path={path} menuIsOpen={handleMenu} />
            </Menu>
            :
            <></>
    )
}