import { skills } from './SkillsData'
export default function SkillsList({ title }) {
    return (
        <>
            <section className='my-10 px-5 w-full max-w-[1800px]' id='work'>
                {title ?
                    <header className='text-2xl font-bold pt-10 project-header'>
                        <h4 style={{ float: 'right' }}><span>🛠️ {title}</span></h4>
                    </header>
                    : null
                }
                <div className="mt-10 place-items-center grid gap-5 grid-cols-5 md:grid-cols-11" id='skills'>
                    {skills.map((skill, index) => (
                        <button
                            style={{
                                cursor: 'default',
                                background: `url(${skill})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 50,
                                width: 50, height: 50, borderRadius: '50%'
                            }} key={index}></button>
                    ))}
                </div>
            </section>
        </>
    )
}