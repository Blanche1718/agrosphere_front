import './App.css';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Solutions from './components/Solutions';
import Propos from './components/Propos';
import Contact from './components/Contact';

function App() {

  return (
    <>
     <Hero />
      <section id="solutions">
        <Solutions />
      </section>
      <section id="propos">
        <Propos />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
      <Footer />
      </section>

     
    </>
  )
}

export default App
