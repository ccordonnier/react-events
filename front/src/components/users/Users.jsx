import React, {useEffect, useState} from 'react';

const Users = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{

        fetch("http://localhost:3000/api/users", { method:"GET"  } )
        .then((response) => {
            console.log(response)
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error("Something went wrong on API server!");
            }
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });


    },[])
    return (
        <div>
            <h1>Users</h1>
        </div>
    );
};

export default Users;