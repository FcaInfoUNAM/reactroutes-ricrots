import React from 'react';
import { BrowserRouter, Routes, Route, Link as RouterLink } from "react-router-dom"; // Renombrar Link si hay colisión

import About from './About';
import ContactUs from './ContactUs';
import TeamSection from './TeamSection';
import NotFound from  './NotFound'

import Nav from './Nav';
import Card from './Card';

import './App.css';


const products = [
  { id: 1, name: 'Producto Alfa', properties: 'Descripción Alfa.', b64Image: 'https://placehold.co/600x400/E97451/white?text=Producto+Alfa', model: 'A001' },
  { id: 2, name: 'Producto Beta', properties: 'Descripción Beta.', b64Image: 'https://placehold.co/600x400/50C878/white?text=Producto+Beta', model: 'B002' },
  { id: 3, name: 'Producto Gamma', properties: 'Descripción Gamma.', b64Image: 'https://placehold.co/600x400/1E90FF/white?text=Producto+Gamma', model: 'G003' },
  { id: 4, name: 'Producto Delta', properties: 'Descripción Delta.', b64Image: 'https://placehold.co/600x400/F28C28/white?text=Producto+Delta', model: 'D004' },
];


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main className="pt-20 min-h-screen bg-gray-100 dark:bg-gray-800 py-8">
        <Routes>
          <Route path="/" element={
            <div className="container mx-auto py-8 px-4">
              <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
                Catálogo de Productos
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                  <Card
                    key={product.id}
                    title={product.name}
                    paragraph={product.properties}
                    image={product.b64Image}
                    productRef={`/producto/${product.id}`}
                  />
                ))}
              </div>
            </div>
          } />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/team" element={<TeamSection />} />
          <Route path="/about" element={<About />} />
          

        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
