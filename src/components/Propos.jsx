import React from 'react';
export default function Propos() {
  return (
    <section className="bg-green-50 py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Image */}
    <div className="relative">
      <img
        src="/images/students.jpg"
        alt="Équipe Agrosphère"
        className="w-full rounded-lg shadow-lg object-cover"
      />
    </div>

    {/* Texte */}
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-green-700 sm:text-4xl mb-4">
        À propos de nous
      </h2>
      <p className="text-lg leading-8 text-gray-600 mb-4">
        Nous sommes le <span className="font-semibold text-green-700">club d’IA et d’IoT</span> de l’Université IFRI d’Abomey-Calavi.
        Notre mission est de concevoir et de réaliser des projets innovants qui modernisent notre environnement et apportent des solutions numériques à l’échelle nationale et internationale.
      </p>
      <p className="text-lg leading-8 text-gray-600">
        À travers Agrosphère, nous mettons en avant le potentiel des technologies intelligentes pour transformer le secteur agricole, améliorer la productivité et répondre aux défis de demain.
      </p>
    </div>
  </div>
</section>

  );
}