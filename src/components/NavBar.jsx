import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between w-screen px-5 py-3 bg-purple-600 items-center'>
        <div className="logo text-3xl font-bold cursor-pointer text-white">
            MovieSearch
        </div>
        <div className="menu">
            <ul className='flex gap-5'>
                <li className='cursor-pointer bg-purple-200 px-5 py-1 rounded-full hover:bg-purple-400'>Home</li>
                <li className='cursor-pointer bg-purple-200 px-5 py-1 rounded-full hover:bg-purple-400'>Blog</li>
                <li className='cursor-pointer bg-purple-200 px-5 py-1 rounded-full hover:bg-purple-400'>About</li>
                <li className='cursor-pointer bg-purple-200 px-5 py-1 rounded-full hover:bg-purple-400'>Contact</li>
            </ul>
        </div>
        <div className="buttons space-x-5">
            <button className='bg-gray-600 hover:bg-gray-900 text-white px-5 py-2 rounded-md font-semibold'>Log in</button>
            <button className='bg-gray-600 hover:bg-gray-900 text-white px-5 py-2 rounded-md font-semibold'>Sign up</button>
        </div>
    </div>
  )
}

export default NavBar