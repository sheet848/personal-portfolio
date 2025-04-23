import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ProjectSection from './components/ProjectSection'
import TechStack from './components/TechStack'

function App() {

  return (
    <>
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
