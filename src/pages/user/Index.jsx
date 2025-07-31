import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Loader from '../../components/loader/Loader';
export default function index() {
    const [users,setUsers]= useState([]);
        const [error,setError]= useState(null);
            const [isLoading,setIsLoading]= useState([true]);
 
 const getUsers = async ()=>{
    try{
      const response= await axios.get(`${import.meta.env.VITE_BURL}/users`);
setUsers(response.data.users);
  }
    catch{
setError(error)
    }
    finally{
        setIsLoading(false);
    }
 }
 useEffect(()=>{
    getUsers();
 })
          
 if(isLoading) return <Loader />
if(error) return <p className='text-danger'>{error.message}</p>
    return (
        <>
        {
users.map(user=>
<div className="user " key={user._id}>
    <h2>{user.userName}</h2>

</div>
)  }

</>

)
}
