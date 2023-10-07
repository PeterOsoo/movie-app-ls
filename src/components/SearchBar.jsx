const SearchBar = ({ searchTerm, setSearchTerm }) => {
	const handleSearch = e => {
		setSearchTerm(e.target.value)
	}

	return (
		<div className="search-bar">
			<input
				type="text"
				placeholder="Search for movies..."
				value={searchTerm}
				onChange={handleSearch}
			/>
		</div>
	)
}

export default SearchBar
