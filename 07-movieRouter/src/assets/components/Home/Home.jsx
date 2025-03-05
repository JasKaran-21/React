import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const movies = [
        { id: 1, title: "Gadar" },
        { id: 2, title: "Bahubali 2" },
        { id: 3, title: "3 Idiots" }
    ]

    return (
        <div className='text-center mx-auto w-2xl bg-teal-800/40 rounded-2xl'>
            <h1 className='text-3xl my-5 pt-5 underline'>Movies Explorer</h1>
            {movies.map((movie) => (
                <div
                    className='pb-2 duration-100'
                    key={movie.id}>
                    <Link
                        className='hover:text-blue-300 p-1 rounded'
                        to={`/movie/${movie.id}`}>{movie.title}</Link>
                </div>
            ))}
        </div>
    )
}

export default Home
