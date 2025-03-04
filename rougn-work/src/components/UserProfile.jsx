import { useState } from "react";

function UserProfile() {
    const [user, setUser] = useState({
        name: "",
        age: "",
        email: "",
    })

    // Function to update individual properties
    const handleChannge = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,  // Update only the changed property
        }))
    };

    return (
        <>
            <h1 className="mb-5">Enter Details</h1>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChannge}
                placeholder="Enter Name"
                className="border p-2 mb-2"
            />
            <br />
            <input
                type="number"
                name="age"
                value={user.age}
                onChange={handleChannge}
                placeholder="Enter Age"
                className="border p-2 mb-2"
            />
            <br />
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChannge}
                placeholder="Enter e-mail"
                className="border p-2 mb-2"
            />

            <div className="flex flex-col items-start gap-4">
                <p>User Name: <strong>{user.name}</strong></p>
                <p>Age: <strong>{user.age}</strong></p>
                <p>E-mail: <strong>{user.email}</strong></p>
            </div>
        </>
    )
}

export default UserProfile;