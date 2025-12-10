import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ProjectsSection from "./components/ProjectsSection"
import AboutMeSection from "./components/AboutMeSection"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <div className="min-h-screen">
        <Header />
        <div className="px-4 pt-28">

          <HeroSection />

          <ProjectsSection />

          <AboutMeSection />

          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
