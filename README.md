# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
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
       
        setMvs(res.results);
      })
      .catch(err => console.error(err));
  }, []);