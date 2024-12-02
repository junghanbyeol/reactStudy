import Movie from "../components/Movie.js";
import { useState, useEffect } from "react";
import "../index.css"; // Tailwind 적용된 스타일

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
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-red-500">
        The Movies! {loading ? "" : `(${movies.length})`}
      </h1>
      {loading ? (
        <h2 className="text-2xl">Loading...</h2>
      ) : (
        <div className="w-full flex justify-center">
          <div className="snap-x snap-mandatory overflow-x-scroll w-11/12 flex gap-6 py-6">
            {movies.map((movie) => (
              <div key={movie.id} className="snap-center">
                <Movie
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
