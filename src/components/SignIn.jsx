import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-green-100">
      <div className="relative w-full max-w-4xl h-auto rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center bg-white">
        
        {/* Colonne droite : branding et illustration (inversée) */}
        <div className="order-2 md:order-1 flex-1 w-full flex flex-col items-center justify-center px-8 py-12">
          <h1 className="text-center text-3xl font-bold text-green-700 mb-8">Connexion</h1>
          <form className="flex flex-col gap-5 w-full max-w-md">
            <input
              className="px-4 py-3 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
              type="email"
              placeholder="E-mail"
            />
            <div className="relative">
              <input
                className="w-full px-4 py-3 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-400 focus:outline-none pr-12"
                required
                type={visible ? "text" : "password"}
                placeholder="Mot de passe"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500"
                onClick={() => setVisible((v) => !v)}
                tabIndex={-1}
              >
                {visible ? (
                  <img src="/images/hide.svg" alt="Cacher" className="h-5 w-5" />
                ) : (
                  <img src="/images/unhide.svg" alt="Afficher" className="h-5 w-5" />
                )}
              </button>
            </div>
            <button
              className="w-full py-3 rounded-lg bg-green-600 text-white font-semibold text-lg hover:bg-green-700 transition"
              type="submit"
            >
              Se connecter
            </button>
          </form>
        </div>

        {/* Colonne gauche : illustration + texte de bienvenue (inversée) */}
        <div className="order-1 md:order-2 relative z-0 bg-green-700 md:w-[40%] w-full h-full flex flex-col items-center justify-between px-10 py-10 overflow-hidden">
          <a href="/" className="flex items-center gap-2 mb-8">
            <img
              alt="logo"
              src="/images/iconw.svg"
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-white/80">Agrosphère</span>
          </a>
          <img
            src="/images/plante.png"
            className="absolute z-10 w-[180px] bottom-6 -right-10 opacity-45"
            alt=""
          />
          <img
            src="/images/feuille.png"
            className="absolute z-10 w-[220px] top-16 left-0 opacity-15 -rotate-45"
            alt=""
          />
          <div className="w-full h-full flex flex-col items-start justify-center gap-6 z-20 mt-10">
            <h1 className="text-white font-bold text-3xl">Bienvenue !</h1>
            <p className="text-white/70">Connectez-vous pour gérer votre activité agricole</p>
          </div>
          <div className="w-full mt-10 px-5 py-4 flex flex-col bg-green-300/30 rounded-xl shadow-md z-20 select-none">
            <p className="text-white/60 text-md">Vous n'avez pas encore de compte ?</p>
            <Link to="/signUp" className="text-white font-bold text-lg hover:underline">Créer un compte</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
