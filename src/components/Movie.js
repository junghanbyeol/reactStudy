import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/Movie.css"; // Movie용 CSS import

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className="movie-card">
      <img className="movie-image" src={coverImg} alt={title} />
      <div className="movie-content">
        <h2 className="movie-title">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p className="movie-summary">{summary}</p>
        <ul className="movie-genres">
          {genres?.map((g) => (
            <li key={g} className="genre-item">
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
