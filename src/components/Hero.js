import React from 'react';
import { FaLinkedinIn, FaEnvelope, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ICON_SIZE = 30;

export default function Hero() {

    return (
        <div className='hero-image'>
            <div className='blur-featured'>
                <div style={{ width: '100%', margin: 'auto' }}>
                    <div style={{ textAlign: 'left', margin: 'auto', width: '90%', maxWidth: 800 }}>
                        <div style={{ fontSize: 28, }}>👋 Hello!<br />
                            {/* I'm William, a Software Developer who loves to analyze and understand how customers interact with products and services, identify their pain points, and then brainstorm on different strategies to solve these pain points<Link to='/about'>...</Link> */}
                            I'm William, a Software Developer currently in his last semester of college🎓<Link to='/about'>...</Link>
                        </div>
                        <div className="hero-social">
                            <a href="https://www.linkedin.com/in/33yliam/" target='_blank' rel="noopener noreferrer"><FaLinkedinIn size={ICON_SIZE} color='white' style={{ background: '#008cff' }} /></a>
                            <a href="https://github.com/33yliam" target='_' rel="noopener noreferrer"><FaGithub size={ICON_SIZE} color='black' /></a>
                            <a href="mailto:33yliam@gmail.com" target='_blank' rel="noopener noreferrer"><FaEnvelope size={ICON_SIZE} color={' #fff'} /></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}