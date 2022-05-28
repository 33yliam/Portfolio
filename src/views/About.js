import React from 'react';
import { FaLinkedinIn, FaEnvelope, FaGithub } from 'react-icons/fa';
import { IoGameController } from 'react-icons/io5'
import { GiPencil } from 'react-icons/gi'
import { FiMusic } from 'react-icons/fi'
import { Helmet } from 'react-helmet'
import SkillsList from '../components/skills/SkillsList';
import { liam } from '../strings';
import './themes/About.css'

const ICON_SIZE = 30;
export default function About() {
    return (
        <>
            <Helmet>
                <title>About William</title>
            </Helmet>
            <div className="App">
                <header className="App-header">
                    <div className='about'>
                        <img
                            src={liam}
                            style={{ width: '200px', height: '200px', margin: 'auto', borderRadius: '50%', background: '#4b4b4d42' }}
                            alt='yliam'
                        />

                        <div style={{
                            fontSize: 24,
                            width: '90%', maxWidth: 800, margin: 'auto', textAlign: 'Left'
                        }}>
                            I'm William, a Software Developer...

                            <div className="hero-social">
                                <a href="https://www.linkedin.com/in/33yliam/" target='_blank' rel="noopener noreferrer"><FaLinkedinIn color='white' size={ICON_SIZE} style={{ background: '#008cff' }} /></a>
                                <a href="https://github.com/33yliam" target='_' rel="noopener noreferrer"><FaGithub size={ICON_SIZE} color='black' /></a>
                                <a href="mailto:33yliam@gmail.com" target='_blank' rel="noopener noreferrer"><FaEnvelope size={ICON_SIZE} color={' #fff'} /></a>
                            </div>
                        </div>
                        <div style={{ margin: 'auto', width: '90%', maxWidth: 1000, marginTop: 50 }} className='about-details'>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontWeight: 'bold', fontSize: 20, color: '#d8d8d8', letterSpacing: 2 }}>CURRENTLY</div>
                                <li>Learning</li>
                                <li>Working on <a href='https://www.33yliam.com/' target={'_blank'} rel='noopener noreferrer'>www.33yliam.com</a></li>
                                <li>Working on <a href='https://www.boardsider.com/' target={'_blank'} rel='noopener noreferrer'>www.boardsider.com</a></li>
                            </div>
                            <hr />
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontWeight: 'bold', fontSize: 20, color: '#d8d8d8', letterSpacing: 2 }}>EDUCATION</div>
                                <li>Bachelor of Technology (B.Tech) in Computer Science and Engineering (2022, India)</li>
                            </div>
                            <hr />
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontWeight: 'bold', fontSize: 20, color: '#d8d8d8', letterSpacing: 2 }}>ACHIEVEMENTS</div>
                                <li>Fully funded undergraduate scholarship under Indian Council for Cultural Relations (ICCR) Scheme, India (2018-2022)</li>
                            </div>
                            <hr />
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontWeight: 'bold', fontSize: 20, color: '#d8d8d8', letterSpacing: 2 }}>HOBBIES</div>
                                <li><GiPencil style={{ display: 'initial' }} /> Drawing</li>
                                <li><IoGameController style={{ display: 'initial' }} /> Esports</li>
                                <li><FiMusic style={{ display: 'initial' }} /> Music</li>
                            </div>
                            <hr />
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontWeight: 'bold', fontSize: 20, color: '#d8d8d8', letterSpacing: 2 }}>TOOLS & TECHNOLOGIES</div>
                                <SkillsList />
                            </div>
                        </div>

                        <a href={'https://docs.google.com/document/d/1xKcPOotR0tiwUWI1LxzAQXxUhM7U1jHsyaPE-geispw/edit?usp=sharing'}
                            target={'_blank'} rel='noopener noreferrer'
                        ><button style={{ padding: 5, borderRadius: 10, border: '1px solid #c5c6c6', color: 'white' }}>RESUME</button></a>
                    </div>
                </header >
            </div >
        </>
    )
}