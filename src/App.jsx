import { useState } from 'react';
import Formulario from './components/Formulario';
import Lista  from './components/Lista';

export default function App() {
  const [peliculas, setPeliculas] = useState([]);

  const addMovie = (pelicula) => setPeliculas([...movies, pelicula]);

  const updateMovie = (index, updatedMovie) => {
    const updatedList = [...movies];
    updatedList[index] = updatedMovie;
    setMovies(updatedList);
  };

  const deleteMovie = (index) => {
    const updatedList = movies.filter((_, i) => i !== index);
    setMovies(updatedList);
  };

  const toggleFavorite = (index) => {
    const updatedList = [...movies];
    updatedList[index].favorite = !updatedList[index].favorite;
    setMovies(updatedList);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Películas</h1>
      <MovieForm onAdd={addMovie} />
      <MovieList
        movies={movies}
        onUpdate={updateMovie}
        onDelete={deleteMovie}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}
