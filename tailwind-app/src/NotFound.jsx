import React from 'react';
import { Link } from 'react-router-dom'; 

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center p-8 bg-gray-100 dark:bg-gray-800">
      <svg className="w-32 h-32 text-orange-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 14a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
      </svg>
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">404</h1>
      <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
        ¡Ups! Página no encontrada.
      </p>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        La página que estás buscando no existe o ha sido movida.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300"
      >
        Volver a Inicio
      </Link>
    </div>
  );
}

export default NotFound;