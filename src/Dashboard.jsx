import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const lineData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 800 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 1000 },
];

const pieData = [
  { name: 'Desktop', value: 60 },
  { name: 'Mobile', value: 30 },
  { name: 'Tablet', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const stats = [
  { title: 'Posts', value: 2390, change: '+4.7%', color: 'green' },
  { title: 'Pages', value: 182, change: '+12.4%', color: 'green' },
  { title: 'Comments', value: 8147, change: '-3.8%', color: 'red' },
  { title: 'New Customers', value: 29, change: '-2.71%', color: 'red' },
  { title: 'Subscribers', value: 17281, change: '-2.4%', color: 'red' },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Agrosphère</h2>
        <ul className="space-y-4">
          <li><Link to="#" className="hover:text-green-400">Dashboard</Link></li>
          <li><Link to="#" className="hover:text-green-400">Posts</Link></li>
          <li><Link to="#" className="hover:text-green-400">Utilisateurs</Link></li>
          <li><Link to="#" className="hover:text-green-400">Paramètres</Link></li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        
        {/* Navbar */}
        <nav className="bg-green-700 shadow p-4 flex justify-between items-center">
          <div className="text-xl font-bold">Dashboard</div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Recherche..."
              className="border rounded px-3 py-1 text-sm"
            />
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div> {/* avatar placeholder */}
          </div>
        </nav>

        {/* Stats blocks */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((item, index) => (
            <div key={index} className="bg-white shadow rounded p-4">
              <h4 className="text-sm text-gray-500">{item.title}</h4>
              <p className="text-2xl font-bold">{item.value}</p>
              <p className={`text-sm ${item.color === 'green' ? 'text-green-500' : 'text-red-500'}`}>
                {item.change}
              </p>
            </div>
          ))}
        </div>

        {/* Charts section */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* Line Chart */}
          <div className="bg-white shadow rounded p-4">
            <h4 className="font-semibold mb-4">Vue des utilisateurs</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white shadow rounded p-4">
            <h4 className="font-semibold mb-4">Utilisateurs par appareil</h4>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </div>
  );
}
