import { useState } from "react";
import { useRef } from "react";
export default function SignInOut() {
    const [visible, setvisible] = useState(false)
    const eye = useRef(null)
    return (
        <div className="w-full h-[100vh] flex justify-center items-center bg-green-100">
            <div className="relative md:bg-gray-100 w-[80%] h-[90vh] rounded-3xl shadow-lg/3 overflow-hidden flex items-center ">
                <a href="/" className="flex absolute top-6 left-6 z-10">
                    <img
                        alt="logo"
                        src="/images/iconw.svg"
                        className="h-8 w-auto"
                    />
                    <span className="text-lg font-bold text-white/80 mx-2">Agrosphère</span>
                </a>
                <div className="relative z-0 bg-green-700 w-[35%] h-full flex flex-col items-center justify-between px-10 py-10 overflow-hidden">
                    <img
                        src="/images/plante.png"
                        className=" absolute z-10 w-[250px] bottom-6 -right-18 opacity-45"
                    />
                    <img
                        src="/images/feuille.png"
                        className=" absolute z-10 w-[300px] top-16 left-0 opacity-15 -rotate-45"
                    />
                    <div className="w-full h-full px-5 py-5 flex flex-col items-start justify-center gap-6 z-20">
                        <h1 className="text-white font-bold text-4xl">Bienvenue!</h1>
                        <p className="text-white/70">Créez votre compte et boostez votre rentabilité agricole</p>
                    </div>
                    <div className="w-full h-auto px-5 py-4 flex flex-col bg-green-300/30 rounded-xl shadow-md/4 z-20 select-none">{/* to redirect a signed-in user to his connection page */}
                        <p className="text-white/60 text-md">Vous avez déjà un compte ?</p>
                        <h1 className="text-white font-bold text-2md">Se connecter</h1>
                    </div>
                </div>
                <form className="[&_input]:text-gray-600 w-[75%] flex flex-col items-center gap-6" action="" method="post" >
                    <input
                        className="w-md px-2 py-3 bg-gray-200 rounded-md focus:outline-2 outline-green-400/40 focus:bg-green-100/30"
                        required
                        type="text"
                        placeholder="Votre nom" />
                    <input
                        className="w-md px-2 py-3 bg-gray-200 rounded-md focus:outline-2 outline-green-400/40 focus:bg-green-100/30"
                        required
                        type="email"
                        placeholder="E-mail" />
                    <div className="w-md px-2 py-3 bg-gray-200 rounded-md focus-within:border-2 border-green-400/40 focus-within:bg-green-100/30 flex justify-between" tabIndex={"0"}>
                        <input className="focus:outline-none" required type={visible ? "text" : "password"} placeholder="Mot de passe" />
                        <input
                            className={`mr-5 appearance-none ${visible ? "bg-[url('/images/hide.svg')]" : "bg-[url('/images/unhide.svg')]"} bg-contain bg-center bg-no-repeat w-6 h-5 border-none`}
                            type="checkbox" ref={(eye)}
                            onClick={() => { setvisible(!visible); this.backgroundImage = 'url(/images/hide.svg)' }}
                        />
                    </div>
                    <button
                    className="w-md px-2 py-3 bg-green-400 rounded-md text-white text-xl hover:bg-green-500 transition duration-200"  
                    type="submit">S'inscrire</button>
                </form>
            </div>
        </div>
    )
}