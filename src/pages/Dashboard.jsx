import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Lun', temperature: 22, humidity: 55 },
  { name: 'Mar', temperature: 24, humidity: 50 },
  { name: 'Mer', temperature: 21, humidity: 60 },
  { name: 'Jeu', temperature: 23, humidity: 58 },
  { name: 'Ven', temperature: 25, humidity: 53 },
];

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 bg-gray-100 flex-1">
          <h1 className="text-2xl font-bold mb-4">Tableau de bord</h1>

          {/* Graphiques */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold mb-2">Température</h2>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                  <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold mb-2">Humidité</h2>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                  <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Historique */}
          <div className="bg-white p-4 rounded shadow mb-8">
            <h2 className="text-lg font-semibold mb-2">Historique des mesures</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-2 py-1">Date</th>
                  <th className="px-2 py-1">Température</th>
                  <th className="px-2 py-1">Humidité</th>
                  <th className="px-2 py-1">Diagnostic</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1">28/05/2025</td>
                  <td className="border px-2 py-1">23°C</td>
                  <td className="border px-2 py-1">55%</td>
                  <td className="border px-2 py-1 text-green-600">Sain</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">27/05/2025</td>
                  <td className="border px-2 py-1">25°C</td>
                  <td className="border px-2 py-1">52%</td>
                  <td className="border px-2 py-1 text-yellow-600">Alerte</td>
                </tr>
                {/* Tu peux ajouter plus de lignes ici */}
              </tbody>
            </table>
          </div>

          {/* Alertes */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Alertes récentes</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li className="text-red-600">⚠️ Humidité trop basse (pot 3) - 27/05/2025</li>
              <li className="text-yellow-600">⚠️ Diagnostic : suspicion de maladie (pot 1) - 26/05/2025</li>
              <li className="text-green-600">✅ Toutes les valeurs normales - 25/05/2025</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
