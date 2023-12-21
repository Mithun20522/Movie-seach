import React, { useState } from 'react'
import NavBar from './components/NavBar'
import SearchBox from './components/SearchBox'
import MovieCard from './components/MovieCard'

const App = () => {
  const [movieData, setMovieData] = useState([])
  const [searchMovie, setSearchMovie] = useState('')
  const [loading , setLoading] = useState(false)

  const fetchMovieInfo  = async () => {
    try {
      setLoading(true)
      const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`)
      const data = await res.json()
      setMovieData(data.Search)
      setLoading(false)

    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  return (
    <div>
      <NavBar/>
      <SearchBox searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieInfo={fetchMovieInfo}/>
      <MovieCard movieData={movieData} loading={loading}/>
    </div>
  )
}

export default App