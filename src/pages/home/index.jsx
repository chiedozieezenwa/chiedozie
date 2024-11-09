import { About, Cert, Contacts, Hero, Navbar, Projects, Resume, Skills } from "../../components"

export const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <Hero />
      <section id="about"><About /></section>
      <section id="resume"><Resume /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="certs"><Cert /></section>
      <section id="contact"><Contacts /></section>
    </div>
  )
}

