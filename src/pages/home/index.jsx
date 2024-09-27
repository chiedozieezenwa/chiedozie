import { About, Contacts, Hero, Navbar, Projects, Resume, Skills } from "../../components"

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  )
}

