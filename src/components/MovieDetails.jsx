import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const MovieDetails = () => {
	const { id } = useParams()
	const [movie, setMovie] = useState(null)

	// MovieDetails.js
	useEffect(() => {
		async function fetchMovieDetails() {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/movie/${id}`,
					{
						params: {
							api_key: "KEY",
						},
					}
				)
				const movieData = response.data
				setMovie(movieData)
			} catch (error) {
				console.error("Error fetching movie details:", error)
			}
		}
		fetchMovieDetails()
	}, [id])

	if (!movie) {
		return <div>Loading...</div>
	}

	return (
		<div className="movie-details">
			<img src={movie.posterUrl} alt={movie.title} />
			<h2>{movie.title}</h2>
			<p>{movie.releaseDate}</p>
			<p>{movie.overview}</p>
		</div>
	)
}

export default MovieDetails
