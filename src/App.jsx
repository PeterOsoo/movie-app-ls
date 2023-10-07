import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/Header"
import MovieList from "./components/MovieList"
import MovieDetails from "./components/MovieDetails"
import SearchBar from "./components/SearchBar"

import axios from "axios"
import "./App.css"

const App = () => {
	const [movies, setMovies] = useState([])
	const [searchTerm, setSearchTerm] = useState("")

	useEffect(() => {
		async function fetchMovies() {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/search/movie`,
					{
						params: {
							api_key: "KEY",
							query: searchTerm,
						},
					}
				)
				const data = response.data
				setMovies(data.results)
			} catch (error) {
				console.error("Error fetching movies:", error)
			}
		}
		fetchMovies()
	}, [searchTerm])

	return (
		<Router>
			<div className="App">
				<Header />
				<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
				<Switch>
					<Route exact path="/" render={() => <MovieList movies={movies} />} />
					<Route path="/movie/:id" component={MovieDetails} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
