import './App.css'
import Navbar from './Components/Navbar';
import Profile from './Components/Profile'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import FooterApp from './Components/FooterApp'
import Contact from './Components/Contact'
import Exp from './Components/Exp'
import BackgroundVideo from './Components/BackgroundVideo';


const App = () => {
  return (
    <div className='margin'>
      <div className="bg-layer">
        <BackgroundVideo />
      </div>

      <div className="main-content">
        <Navbar />
        <Profile />
        <Skills />
        <Projects />
        <Exp />
        <Contact />
        <FooterApp />
      </div>



    </div>
  )
}

export default App