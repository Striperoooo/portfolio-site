import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ProjectsSection from "./components/ProjectsSection"

function App() {

  return (
    <>
      <div className="bg-primary-fill min-h-screen">
        <div className="px-4">

          <Header />

          <HeroSection />

          <ProjectsSection />
        </div>
      </div>
    </>
  )
}

export default App
