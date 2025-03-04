import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div>
      <h2 className='bg-gray-800 text-3xl text-white text-center p-5'>User: {userid}</h2>
    </div>
  )
}

export default User
