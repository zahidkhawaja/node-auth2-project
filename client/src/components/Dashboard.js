import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        console.log(window.localStorage.getItem("token"));
        axios.get("http://localhost:8000/api/users/", {headers: { authorization : JSON.parse(window.localStorage.getItem("token")) }})
        .then(res => {
            console.log("Get users DATA", res.data);
            setUsers(res.data);
            console.log("USERS", users);
        })
        .catch(err => console.log("Get users ERROR", err))
    }, [users])

    return (
        <div className = "dashboard">
            <h2>Dashboard</h2>
            {users ? users.map(user => (
                <div key = {user.id} className = "user"> 
                    <p>{user.username}</p>
                </div>
            )) : <div><h2>Loading...</h2></div>}
        </div>
    )
};

export default Dashboard;