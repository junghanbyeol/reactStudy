import Movie from "../components/Movie.js";
import { useState, useEffect } from "react";
import "../css/Home.css"; // Home용 CSS import

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">
        The Movies! {loading ? "" : `(${movies.length})`}
      </h1>
      {loading ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        <div className="movie-slider">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
