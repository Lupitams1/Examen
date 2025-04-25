import Card from './Card';

export default function Lista({ movies, onUpdate, onDelete, onToggleFavorite }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          movie={movie}
          index={index}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
