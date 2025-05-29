import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setMessage('Merci pour votre inscription !!!');
      setEmail(''); // on vide le champ après
      setTimeout(() => setMessage(''), 3000); // efface après 3 sec
    } else {
      setMessage('Veuillez entrer une adresse e-mail valide.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <footer className="relative z-50 bg-green-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <img src="/images/iconw.svg" alt="Agrosphère" className="h-10 mb-4" />
          <p className="text-sm">
            Agrosphère - Modernisons ensemble l’agriculture grâce à l’IA et l’IoT.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Liens rapides</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-green-400">Accueil</a></li>
            <li><a href="#" className="hover:text-green-400">À propos</a></li>
            <li><a href="#" className="hover:text-green-400">Produits</a></li>
            <li><a href="#" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Suivez-nous</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#"><i className="fab fa-facebook-f hover:text-green-400"></i></a>
            <a href="#"><i className="fab fa-twitter hover:text-green-400"></i></a>
            <a href="#"><i className="fab fa-linkedin-in hover:text-green-400"></i></a>
            <a href="#"><i className="fab fa-instagram hover:text-green-400"></i></a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Newsletter</h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">

    
            <input
            type="email"
            placeholder="Votre e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 rounded text-white border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
            />

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 px-3 py-2 rounded text-sm font-semibold"
            >
              S’inscrire
            </button>
          </form>
          {message && <p className="mt-2 text-sm text-green-300">{message}</p>}
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Agrosphère. Tous droits réservés.
      </div>
    </footer>
  );
}
