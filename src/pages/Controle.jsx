import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function Controle() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Contrôle du robot</h1>

          <div className="bg-white p-4 rounded shadow mb-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Lancer mission
            </button>
            <p className="text-sm text-gray-500 mt-2">Planifier les horaires, suivre l’état du bras, etc.</p>
          </div>

          {/* Exemple de planning */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Planification horaire</h2>
            <ul className="list-disc pl-5">
              <li>06h00 – Vérification humidité</li>
              <li>18h00 – Vérification température</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
