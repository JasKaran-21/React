import React from 'react'
import { useParams } from 'react-router-dom'

function MovieDetail() {
    const {id} = useParams()

  return (
    <div className='text-center text-3xl mx-auto'>
      <h1 className='my-10'>Movies Detail for ID: {id}</h1>
    </div>
  )
}

export default MovieDetail
