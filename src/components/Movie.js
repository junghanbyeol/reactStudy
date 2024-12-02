import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg w-72">
      <img
        className="w-full h-96 object-cover rounded-t-lg"
        src={coverImg}
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">
          <Link to={`/movie/${id}`} className="hover:text-red-400">
            {title}
          </Link>
        </h2>
        <p className="text-sm text-gray-400 line-clamp-3">{summary}</p>
        <ul className="flex flex-wrap gap-2 mt-3">
          {genres?.map((g) => (
            <li key={g} className="bg-gray-700 px-2 py-1 rounded-full text-xs">
              {g}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
