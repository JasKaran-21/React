import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData();
    // console.log(data);
    
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/jaskaran-21")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])


    return (
        <div>
            <h2 className='text-3xl text-center bg-black/95 text-white p-5'>Git Hub Followers: {data.followers} </h2>
            <div className='mx-auto flex gap-10 justify-center bg-black/90 text-white py-10 items-center'>
                <img className='w-50 rounded-2xl shadow-2xl' src={data.avatar_url} alt="img" />
                <div>
                    <p>User Name: {data.login} </p>
                    <p>Bio: {data.bio}</p>
                    <p>Repository: {data.public_repos}</p>
                </div>
            </div>
        </div>
    )
}

export const githubInfoLoader = async() => {
    const response = fetch("https://api.github.com/users/jaskaran-21")
    return (await response).json();
}