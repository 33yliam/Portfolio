import './App.css';
import Hero from './components/Hero';
import { Helmet } from 'react-helmet'
import ProjectList from './components/projects/ProjectList';
import SkillsList from './components/skills/SkillsList';
//import all other themes
import './views/themes/BlockchainCrypto.css'
import './views/themes/BoardSider.css'
import './views/themes/InsiderApp.css'
import './views/themes/LMT.css'


function App() {
  return (
    <liam>
      <Helmet>
        <title>William's Portfolio</title>
      </Helmet>
      <div className="App">
        <header className="App-header">
          <Hero />
          <ProjectList />
          <SkillsList title={'SKILLS'} />
        </header>
      </div>
    </liam>
  );
}

export default App;
