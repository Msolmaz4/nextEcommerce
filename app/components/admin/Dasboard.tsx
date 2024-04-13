
"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface UserProps {
    id?:string
    name?:string
    role?:string
    email?:string

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
    
    const delet = async(id:string)=>{
        console.log(id,"delety")
        if (!id) {
            console.error('User id is undefined');
            return;
        }
        try {
            await axios.delete(`/api/user/${id}`)
            const newUsers = users.filter(user=>user.id !== id)
            setUsers(newUsers)
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }
    
    


    return (
        <div>
            {users?.map(user => (
                <div key={user.id} style={{marginTop:"10px",height:"50px", alignItems:"center",display:"flex", justifyContent:"space-around", border:"2px solid red ",width:"900px" ,borderRadius:"15px"}}>
                    <div style={{width:"%30"}}>
                         {user.name}
                    </div>
                   
                    <div style={{background: user?.role == "ADMIN" ? "blue" :"",width:"%20" }}> {user?.role} </div>
                   <div>{user?.email} </div>
                    <div style={{gap:"5px", marginLeft:"15px"}}>
                    <button style={{background:"red" ,marginRight:"25px"}} onClick={()=> user.id && delet(user.id)}>DELETE</button>

                    <button>EDIT</button></div>
                   
                    </div>
            ))}
        </div>
    );
};

export default Dasboard;
