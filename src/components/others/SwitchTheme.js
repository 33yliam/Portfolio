import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './SwitchTheme.css'

const myThemes = {
    boardsider: '#41145a',
    wumpus: '#613100',
    insiderApp: '#590303',
    blockchainCrypto: '#508281',
    lmt: '#003b49',
    default: '#4e4e50',
}

export default function SwitchTheme() {
    const [theme, setTheme] = useState('theme-lmt');
    const [activeTheme, setActiveTheme] = useState('lmt');
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/' || pathname === '/about')
            document.getElementsByTagName('body')[0].className = theme;
    }, [pathname])
    useEffect(() => {
        document.getElementsByTagName('body')[0].className = theme;
    }, [theme])
    return (
        <>
            <div className="switch">
                <div className="switch-theme">🎨</div>
                <div className="switch-select op5" style={{ background: myThemes[activeTheme] }}></div>
                {Object.keys(myThemes).map((key, index) => (
                    key !== activeTheme ?
                        <div key={index} className="switch-select op5" style={{ background: myThemes[key] }} onClick={() => {
                            setActiveTheme(key)
                            setTheme(`theme-${key}`)
                        }}></div>
                        :
                        null
                ))}
            </div>
        </>
    )
}
