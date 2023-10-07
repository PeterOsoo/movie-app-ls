import { Link } from "react-router-dom"

const MovieList = ({ movies }) => {
	return (
		<div className="movie-list">
			{movies.map(movie => (
				<Link to={`/movie/${movie.id}`} key={movie.id}>
					<div className="movie-card">
						<img src={movie.posterUrl} alt={movie.title} />
						<h3>{movie.title}</h3>
					</div>
				</Link>
			))}
		</div>
	)
}

export default MovieList
