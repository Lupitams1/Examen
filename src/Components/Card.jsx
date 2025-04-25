import { useState } from 'react';

export default function Card({ pelicula, index, onUpdate, onDelete, onToggleFavorite }) {
  const [isEditing, setIsEditing] = useState(false);
  const [edited, setEdited] = useState({ ...pelicula });

  const handleSave = () => {
    onUpdate(index, edited);
    setIsEditing(false);
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white">
      {isEditing ? (
        <>
          <input
            className="w-full p-1 border mb-1"
            value={edited.title}
            onChange={(e) => setEdited({ ...edited, title: e.target.value })}
          />
          <textarea
            className="w-full p-1 border mb-1"
            value={edited.description}
            onChange={(e) => setEdited({ ...edited, description: e.target.value })}
          />
          <input
            className="w-full p-1 border mb-2"
            value={edited.genre}
            onChange={(e) => setEdited({ ...edited, genre: e.target.value })}
          />
          <button className="bg-green-500 text-white px-3 py-1 mr-2 rounded" onClick={handleSave}>
            Guardar
          </button>
          <button className="bg-gray-300 px-3 py-1 rounded" onClick={() => setIsEditing(false)}>
            Cancelar
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold">{movie.title}</h2>
          <p className="text-gray-700">{movie.description}</p>
          <p className="italic text-sm text-gray-500">Género: {movie.genre}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              className="bg-yellow-400 text-white px-3 py-1 rounded"
              onClick={() => onToggleFavorite(index)}
            >
              {movie.favorite ? '★ Favorito' : '☆ Marcar Favorito'}
            </button>
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded"
              onClick={() => setIsEditing(true)}
            >
              Editar
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => onDelete(index)}
            >
              Eliminar
            </button>
          </div>
        </>
      )}
    </div>
  );
}
