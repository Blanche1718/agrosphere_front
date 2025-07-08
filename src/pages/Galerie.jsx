import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function Gallerie() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Galerie d’images</h1>

          {/* grille d’images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-2 rounded shadow">
              <img src="/images/feuille.png" alt="Plante 1" className="w-full h-40 object-cover rounded" />
              <p className="text-sm mt-2">Plante saine – 90%</p>
            </div>
            <div className="bg-white p-2 rounded shadow">
              <img src="/images/logo5.jpg" alt="Plante 2" className="w-full h-40 object-cover rounded" />
              <p className="text-sm mt-2">Plante malade – 60%</p>
            </div>
            <div className="bg-white p-2 rounded shadow">
              <img src="/images/logo6.jpg" alt="Plante 3" className="w-full h-40 object-cover rounded" />
              <p className="text-sm mt-2">Plante en croissance – 80%</p>
            </div>
            <div className="bg-white p-2 rounded shadow">
              <img src="/images/logo2.jpg" alt="Plante 4" className="w-full h-40 object-cover rounded" />
              <p className="text-sm mt-2">Plante en repos – 70%</p>
            </div>
            <div className="bg-white p-2 rounded shadow">
              <img src="/images/logo3.jpg" alt="Plante 5" className="w-full h-40 object-cover rounded" />
              <p className="text-sm mt-2">Plante en floraison – 85%</p>
            </div>
            <div className="bg-white p-2 rounded shadow">
              <img src="/images/logo4.jpg" alt="Plante 6" className="w-full h-40 object-cover rounded" />
              <p className="text-sm mt-2">Plante en fructification – 95%</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
