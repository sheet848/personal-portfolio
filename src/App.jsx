import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import ProjectSection from './components/ProjectSection'
import TechStack from './components/TechStack'

function App() {

  return (
    <>
    <NavBar />
    <main className='layout'>
      <Hero />
      <ProjectSection />
      <TechStack />
    </main>
    <Footer />
    </>
  )
}

export default App
