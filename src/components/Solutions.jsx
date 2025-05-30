


export default function Solutions() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Nos Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-green-50 p-6 rounded-lg shadow-md hover:scale-102 transition duration-500 grayscale hover:grayscale-0">
            <img
              width='120px'
              src="/images/tube.svg"
              className="group-hover:-translate-y-5 transition duration-500"
              style={{margin:'auto',padding:'1em',}}
            />
            <h3 className="text-xl font-semibold text-green-800 mb-4 text-center">Agriculture de Précision</h3>
            <p className="text-gray-700 text-center">Optimisez vos rendements avec des capteurs IoT et des analyses de données avancées.</p>
          </div>
          <div className="group bg-green-50 p-6 rounded-lg shadow-md hover:scale-102 transition duration-500 grayscale hover:grayscale-0">
            <img
              width='120px'
              src="/images/leaf-light.svg"
              className="group-hover:-translate-y-5 transition duration-500"
              style={{margin:'auto',padding:'1em',}}
            />
            <h3 className="text-xl font-semibold text-green-800 mb-4 text-center">Gestion Durable</h3>
            <p className="text-gray-700 text-center">Implémentez des pratiques durables pour préserver les ressources naturelles.</p>
          </div>
          <div className="group bg-green-50 p-6 rounded-lg shadow-md hover:scale-102 transition duration-500 grayscale hover:grayscale-0">
            <img
              width='120px'
              src="/images/learn.svg"
              className="group-hover:-translate-y-5 transition duration-500"
              style={{margin:'auto',padding:'1em',}}
            />
            <h3 className="text-xl font-semibold text-green-800 mb-4 text-center">Formation et Support</h3>
            <p className="text-gray- text-center">Bénéficiez de formations personnalisées et d'un support technique dédié.</p>
          </div>
        </div>
      </div>
    </div>
  );
}