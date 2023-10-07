import { useEffect, useState } from "react"
import axios from "axios"

const Movies = () => {
	const [movies, setMovies] = useState(null)

	useEffect(() => {
		axios
			.get("http://www.omdbapi.com/?i=tt3896198&apikey=KEY")
			.then(response => {
				setMovies(response.data)
			})
	}, [])

	console.log(movies)

	return <div>Movie</div>
}

export default Movies
