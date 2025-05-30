function Navbar() {
    return (
      <div className="bg-green-800 text-white flex justify-between items-center p-4 shadow">
       <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">Agrosphère</span>
            <img
            alt="logo"
            src="/images/icon.svg"
            className="h-8 w-auto"
            />
            <span className="text-lg font-bold text-white">Agrosphère</span>
        </a>
       </div>
        <button className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm">Se déconnecter</button>
      </div>
    );
  }
  
  export default Navbar;
  