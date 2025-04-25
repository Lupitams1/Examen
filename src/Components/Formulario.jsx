import { useState } from 'react';

export default function Formulario({ onAdd }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [genero, setGenero] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!titulo || !descripcion || !genero) return;

    onAdd({ title, descripcion, genero, favorito: false });
    setTiulo('');
    setDescripcion('');
    setGenero('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mb-8">
      <input
        className="w-full p-2 border rounded"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Género"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Agregar 
      </button>
    </form>
  );
}
