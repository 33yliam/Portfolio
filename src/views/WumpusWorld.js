import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'
import { projectImages, colors } from '../strings';
import './themes/Wumpus.css'

const title = 'Wumpus World'
const techs = [
  { name: 'Python', img: '/images/icons/python.png' },
  { name: 'PyGame', img: '/images/icons/pygame.png' },
  { name: 'MediaPipe', img: '/images/icons/mediapipe.png' },
]

const resources = [
  '/images/icons/github.svg',
]

export default function WumpusWorld() {

  useEffect(() => {
    document.getElementsByTagName('body')[0].className = 'theme-wumpus'
  }, [])

  return (<project>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <div className="App">
      <header className="App-header">
        <section className='my-10 px-5 w-full max-w-[1800px]'>
          <header className='text-2xl font-bold pt-10 text-center'>
            <h2>{title}</h2>
            <div className='project-date'>January, 2022</div>
          </header>
          <div className='my-7 space-y-24'>
            <article className='flex flex-wrap md:justify-center md:items-center'>
              <picture className='w-full md:w-6/12 shadow-lg '>
                <source srcSet={projectImages.wumpusWorld.preview} sizes='(min-width: 768px) 50vw, 100vw' type='image/jpg' />
                <img loading='eager' alt='' className='rounded-lg' />
              </picture>
              <div className='flex flex-col overflow-unset  space-y-3 my-3 mx-1 w-full md:w-5/12 '>
                <p className='shadow-lg'>
                  <span style={{ color: 'wheat' }}>{title}</span> is a game inspired by the game 'Hunt the Wumpus' which provides an environment to a knowledge-based agent to demonstrate its stored knowledge.
                  <br /><br />
                  Properties:
                  <li>A single player game (one agent)</li>
                  <li>Partially observable</li>
                  <li>Deterministic</li>
                  <li>Static (pits, gold, and Wumpus)</li>
                  <li>Discrete</li>
                  <br />
                  A group project with <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>Charitha</a>, <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>Dhriti</a>, and <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>Sudeep</a>.
                </p>
              </div>
            </article>
          </div>

          <header className='text-2xl font-bold pt-10'>
            <h4 className='project-header'><span>🛈 Game Details</span></h4>
          </header>
          <div className='my-7 space-y-24'>
            <article className='flex flex-wrap md:justify-center md:items-center'>
              <picture className='w-full md:w-6/12 shadow-lg '>
                <source srcSet={projectImages.wumpusWorld.gif} type='image/jpg' />
                <img loading='eager' alt='' className='rounded-lg w-full' />
              </picture>
              <div className='flex flex-col overflow-unset  space-y-3 my-3 mx-1 w-full md:w-5/12 '>
                <p className='shadow-lg'>
                  The game is a cave with 16 rooms. Each room can either be empty, have the Wumpus, be a pit, have the gold, or contain both the Wumpus and the gold.
                  <li>Each room (except the first one [0,0]) can be a pit with the probability of 0.2.</li>
                  <li>The goal of the agent is to obtain the gold.</li>
                  <li>Agent progresses to the next level after obtaining the gold.</li>
                  <li>The game follows PEAS Description</li>
                </p>
              </div>
            </article>
          </div>

          <header className='text-2xl font-bold pt-10'>
            <h4 className='project-header'><span>📜 PEAS Description</span></h4>
          </header>
          <div className='my-7 space-y-24'>
            <article className='flex flex-wrap md:justify-center md:items-center'>
              <picture className='w-full md:w-6/12 shadow-lg '>
                <source srcSet={projectImages.wumpusWorld.p} type='image/jpg' />
                <img loading='eager' alt='' className='rounded-lg w-full' />
              </picture>
              <div className='flex flex-col overflow-unset  space-y-3 my-3 mx-1 w-full md:w-5/12 '>
                <p className='shadow-lg'>
                  <h3>PERFORMANCE MEASURE</h3>
                  <li>If the agent gets the gold, he will receive 1000 bonus points, and advance to next level.</li>
                  <li>If the agent gets devoured by the Wumpus or fall into the pit, he will lose 1000 points, and restart level.</li>
                  <li>Each action =  -1 point.</li>
                  <li>Using an arrow = -10 points.</li>
                  <br />
                  <h3>ENVIRONMENT</h3>
                  <li>4x4 grid room</li>
                  <li>Initially, the agent is in first room (room[0,0])</li>
                  <li>Excluding room[0,0]</li>
                  <li>Location of gold and wumpus are chosen randomly</li>
                  <li>Each square of the cave can be a pit with probability 0.2</li>

                </p>
              </div>
            </article>

            <div className='my-7 space-y-24'>
              <article className='flex flex-wrap md:justify-center md:items-center'>
                <picture className='w-full md:w-6/12 shadow-lg '>
                  <source srcSet={projectImages.wumpusWorld.s} type='image/jpg' />
                  <img loading='eager' alt='' className='rounded-lg w-full' />
                </picture>
                <div className='flex flex-col overflow-unset  space-y-3 my-3 mx-1 w-full md:w-5/12 '>
                  <p className='shadow-lg'>
                    <h3>ACTUATORS</h3>
                    <li>The agent can move up, down, left, and right</li>
                    <li>The agent can shoot an arrow up, down, left, and right</li>
                    <li>Agent will automatically grab the gold when in gold room (if and only if Wumpus isn’t in the gold room)</li>
                    <br />
                    <h3>SENSORS</h3>
                    The agent will perceive:
                    <li><span style={{ color: colors.link }}>Stench</span> when in room directly adjacent to the Wumpus.</li>
                    <li><span style={{ color: colors.link }}>Breeze</span> when in room directly adjacent to the Pit.</li>
                    <li><span style={{ color: colors.link }}>Glitter</span> when in room where the gold is present.</li>
                    <li><span style={{ color: colors.link }}>Bump</span> when he walks into a wall.</li>
                    <li><span style={{ color: colors.link }}>Bump</span> when he uses an arrow.</li>
                    <li>Added sound effects for each sensor</li>
                    <br />
                    <li>When the Wumpus is shot, it emits a horrible scream which can be perceived anywhere in the cave.</li>
                  </p>
                </div>
              </article>
            </div>
          </div>

          <header className='text-2xl font-bold pt-10'>
            <h4 className='project-header'><span>⚙️ Tools and Technologies</span></h4>
          </header>
          <article className='text-left'>
            <p>
              <div className="flex mb-[5px]">
                {techs.map((tech, index) => (
                  <button
                    style={{
                      cursor: 'default',
                      background: `url(${tech.img})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 30,
                      marginRight: 10,
                      width: 30, height: 30, borderRadius: '50%'
                    }} key={index}></button>
                ))}
              </div>
              {techs.map((tech, index) => (
                <li key={index}>{tech.name}</li>
              ))}
            </p>
          </article>

          <header className='text-2xl font-bold pt-10'>
            <h4 className='project-header'><span>🔗 Resources</span></h4>
          </header>
          <article className='text-left'>
            <p>
              <div className="flex mb-[5px]">
                {resources.map((tech, index) => (
                  <button
                    style={{
                      cursor: 'default',
                      background: `url(${tech})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 30,
                      marginRight: 10,
                      width: 30, height: 30, borderRadius: '50%'
                    }} key={index}></button>
                ))}
              </div>
              <li>Source code: <a href='https://github.com/33yliam/Wumpus-World' target='_blank' rel='noreferrer'>GitHub code</a></li>
            </p>
          </article>


        </section>
      </header>
    </div>
  </project>)
};

