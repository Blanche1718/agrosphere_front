import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Solutions from './components/Solutions';
import Propos from './components/Propos';
import Contact from './components/Contact';
import Dashboard from './pages/Dashboard';
import Historique from './pages/Historique';
import Alertes from './pages/Alertes';
import Galerie from './pages/Galerie';
import Controle from './pages/Controle';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page d’accueil */}
        <Route path="/" element={
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
        } />

        <Route path="/signUp" element={
          <SignUp />

        } />

          <Route path="/signIn" element={
          <SignIn />

        } />
        
        <Route path="/dashboard" element={
          <>
            <Dashboard />

          </>
        } />

        <Route path="/galerie" element={
          <>
            <Galerie />
          </>
        } />

        <Route path="/controle" element={
          <>
            <Controle />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
