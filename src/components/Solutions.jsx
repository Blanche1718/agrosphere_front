


export default function Solutions() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Nos Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Agriculture de Précision</h3>
            <p className="text-gray-700">Optimisez vos rendements avec des capteurs IoT et des analyses de données avancées.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Gestion Durable</h3>
            <p className="text-gray-700">Implémentez des pratiques durables pour préserver les ressources naturelles.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Formation et Support</h3>
            <p className="text-gray-700">Bénéficiez de formations personnalisées et d'un support technique dédié.</p>
          </div>
        </div>
      </div>
    </div>
  );
}