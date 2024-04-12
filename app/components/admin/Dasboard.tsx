
"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface UserProps {
    id?:string
    name?:string
}

const Dasboard = () => {
    const [users, setUsers] = useState<UserProps[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get("/api/user");
                console.log(res.data, "data");
                setUsers(res.data);
            } catch (err) {
                console.log(err, "rrrrrrrrrrrrrrrrrrrrr");
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};

export default Dasboard;
