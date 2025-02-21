import { useEffect, useState } from 'react';

import './App.css';
import { Card } from './components/Card';

function App() {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWZmYzcwMmJlNjYwYWQ5YjY5Yzg3YjQxMzk0MjIzZSIsIm5iZiI6MTYzOTQ3NjczNi41MDMsInN1YiI6IjYxYjg2ZTAwMjE2MjFiMDA0NDFiOTczYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OtwDaQ1fZw6iQyd76VaK9G-yjqhpjzxja8dqqwHvBDU',
      },
    };

    fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      options
    )
      .then(res => res.json())
      .then(res => {
        setMovies(res.results)
      })
      .catch(err => console.error(err));
  }, []);

  console.log(movies);
  if (!movies || !movies.length) return <>No movies found</>
  return (
    <>
    <h1>Movies</h1>
      {movies.map((movie) => <Card data={movie} />)}
    </>
  )
}

export default App
