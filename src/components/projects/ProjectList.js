import { Link } from 'react-router-dom';
import { HiDownload } from 'react-icons/hi'
import { BsEye } from 'react-icons/bs'
import { projectColors } from '../../strings';
import projects from './ProjectData'
import '../../styles/ProjectList.css'
import { useEffect, useState } from 'react';

const ProjectList = () => {
    const [filter, setFilter] = useState('all')
    const [filteredProjects, setFilteredProjects] = useState(projects)

    useEffect(() => {
        if (filter === 'all')
            setFilteredProjects(projects)
        else {
            setFilteredProjects([])
            for (let i = 0; i < projects.length; i++) {
                if (projects[i].tag && projects[i].tag.includes(filter))
                    setFilteredProjects(filteredProjects => [...filteredProjects, projects[i]])
            }
        }
    }, [filter])
    return (<>
        <section className='my-10 px-5 w-full max-w-[1800px]' id='work'>
            <header className='text-2xl font-bold pt-10'>
                <h4 className='project-header'><span>💼 WORK</span></h4>
            </header>
            <div className='my-7 space-y-24'>
                <div>
                    <button className={filter === 'all' ? 'filter-projects active' : 'filter-projects'}
                        onClick={() => setFilter('all')}>All {filter === 'all' ? `(${filteredProjects.length})` : null}</button>
                    <button className={filter === 'college' ? 'filter-projects active' : 'filter-projects'}
                        onClick={() => setFilter('college')}>College {filter === 'college' ? `(${filteredProjects.length})` : null}</button>
                </div>
                {filteredProjects.map((project, index) => (
                    <article className='flex flex-wrap md:justify-center md:items-center' key={index}>
                        <picture className='w-full md:w-6/12 shadow-lg '>
                            <img src={project.image} alt={project.title} className='rounded-lg' />
                        </picture>
                        <div className='flex flex-col overflow-unset  space-y-3 my-3 mx-1 w-full md:w-5/12 '>
                            {project.in ?
                                <h3 className='font-bold text-lg'><Link to={project.link}>{project.title}</Link></h3>
                                :
                                <h3 className='font-bold text-lg'><a href={project.link} target='_blank' rel='noreferrer'>{project.title}</a></h3>
                            }
                            <span style={{ color: 'wheat', fontSize: '13px', marginTop: '2px' }}>{'{'}{project.type}{'}'}
                                {project.in ?
                                    <span style={{ color: '#d7d7d7', fontStyle: 'italic' }}></span>
                                    :
                                    null

                                }
                            </span>
                            <p className='shadow-lg'>
                                {project.description}
                                <div className='flex space-x-3 pb-1' style={{ marginTop: 10, }}>
                                    {project.tools.map((disc, index) => (
                                        <img src={disc} alt='tools' loading='lazy' className='w-16 mb-1' style={{ width: 35, height: 35 }} />
                                    ))}
                                </div>
                            </p>

                            <div className='flex space-x-3 pb-1 project-right overflow-hidden'>
                                {project.toolsDesc.map((disc, index) => (
                                    <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm' key={index} style={{
                                        border: `1px solid ${projectColors[Math.round(Math.random() * 10)]}`,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        {disc}
                                    </span>
                                ))}
                            </div>

                            <div className='w-auto flex space-x-5 relative project-right'>
                                {project.download ?
                                    <a href={project.download} target='_blank' rel='noreferrer'>
                                        <HiDownload color={'white'} size={24} />
                                    </a>
                                    :
                                    null
                                }
                                {project.github ?
                                    <a href={project.github} target='_blank' rel='noreferrer'>
                                        <img src='/images/icons/github.svg' alt='github' width='24px' height='24px' />
                                    </a>
                                    :
                                    null
                                }

                                {project.link ?
                                    project.in ?
                                        <Link to={project.link}>
                                            <BsEye size={24} color={'white'} />
                                        </Link>
                                        :
                                        <a href={project.link} target='_blank' rel='noreferrer'>
                                            <img src='/images/icons/external-link.svg' alt='link' width='24px' height='24px' />
                                        </a>
                                    :
                                    null

                                }

                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>

    </>)
}
export default ProjectList;