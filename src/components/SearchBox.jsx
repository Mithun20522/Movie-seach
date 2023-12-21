import React from 'react'

const SearchBox = ({searchMovie, setSearchMovie, fetchMovieInfo}) => {
  return (
    <div className='flex justify-center p-10'>
      <input
      value={searchMovie}
      onChange={(e) => setSearchMovie(e.target.value)}
       className='px-[70px] py-3 outline-none border-2 border-black text-black rounded-l-xl shadow-lg' type="text" placeholder='Enter Movie Name....' />
      <button onClick={fetchMovieInfo} className='bg-purple-500 px-6 rounded-r-xl hover:bg-purple-700 text-white font-bold text-lg shadow-lg'>Search</button>
    </div>
  )
}

export default SearchBox