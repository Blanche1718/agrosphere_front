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

          {/* Exemple de grille d’images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-2 rounded shadow">
              <img src="/images/exemple1.jpg" alt="Plante 1" className="w-full h-40 object-cover rounded" />
              <p className="text-sm mt-2">Plante saine – 90%</p>
            </div>
            <div className="bg-white p-2 rounded shadow">
              <img src="/images/exemple2.jpg" alt="Plante 2" className="w-full h-40 object-cover rounded" />
              <p className="text-sm mt-2">Plante malade – 60%</p>
            </div>
            {/* Ajoute d’autres images ici */}
          </div>
        </main>
      </div>
    </div>
  );
}
