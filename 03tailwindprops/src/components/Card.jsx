import React from 'react'

function Card({username, btnText="Please Visit"}) {   // Destructuring the props object = cut props, set {username} in {}.
    console.log(username);

    return (
        <>
            {/* <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
                <img className="w-full h-48 object-cover rounded-xl" src="https://cdn.pixabay.com/photo/2017/03/28/11/59/alone-2181885_1280.jpg" />
                <div className="py-4">
                    <h2 className="text-xl font-bold text-gray-800">{username}</h2>
                    <p className="text-gray-600 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, quod?</p>
                </div>
                <div className="mt-4">
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl">
                        Learn More
                    </button>
                </div>
            </div> */}

            <div className="relative h-[400px] w-[300px] rounded-xl mt-5">
                <img
                    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                    alt="AirMax Pro"
                    className="z-0 h-full w-full rounded-xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-lg font-semibold text-white">{username}</h1>
                    <p className="mt-2 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                        debitis?
                    </p>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                        {btnText} →
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card
