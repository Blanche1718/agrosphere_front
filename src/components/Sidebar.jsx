import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-green-900 text-white min-h-screen p-4">
      <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">Agrosphère</span>
            <img
            alt="logo"
            src="/images/icon.svg"
            className="h-8 w-auto"
            />
            <span className="text-lg font-bold text-white">Menu</span>
        </a>
       </div>
      <ul className="space-y-2">
        <li><Link to="/dashboard" className="hover:text-green-400">Dashboard</Link></li>
        <li><Link to="/controle" className="hover:text-green-400">Controle</Link></li>
        <li><Link to="/galerie" className="hover:text-green-400">Galerie</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
