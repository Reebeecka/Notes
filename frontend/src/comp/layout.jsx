import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function Layout() {

    const navigate = useNavigate();

    const [start, setStart] = useState(true)
    const [loggedIn, setLoggedIn] = useState(false)
    const [badLogin, setBadLogin] = useState(false)
    const [userCreated, setUserCreated] = useState(false)
    const [user, setUser] = useState({
        username: "",
        password: "",
    })

    useEffect(() => {
        let ls = localStorage.getItem("user");
        if (ls) {
            setStart(false)
            setLoggedIn(true)
        }
    }, [])

    function handleUser(e) {
        let name = e.target.name
        let uppdate = ({ ...user, [name]: e.target.value })
        setUser(uppdate)
    }

    function loggOut() {
        setStart(true)
        setLoggedIn(false)
        localStorage.clear();
        navigate("/")
    }


    async function loggIn() {
        await axios.post("http://localhost:3000/login", user)
            .then(response => {
                let data = response.data

                if (data.status === "loggedIn") {

                    localStorage.setItem('user', JSON.stringify(user));
                    setStart(false);
                    setBadLogin(false);
                    setLoggedIn(true);
                    setUserCreated(false);
                    navigate("/user")
                }
                else {
                    setBadLogin(true);
                    setUserCreated(false);
                }
            })
    }

    async function createUser() {
        await axios.post("http://localhost:3000/login/newUser", user)
            .then(response => {
                setUserCreated(true);
                setBadLogin(false);
            }
            )
    }

    return (<>
        <header>
            {start && <>
                <h1>Welcome! Please login!</h1>
                <form >
                    Username: <input type="text" name="username" value={user.username} onChange={handleUser} />
                    Password: <input type="text" name="password" value={user.password} onChange={handleUser} />
                </form>
                <button onClick={loggIn}>LogIn</button>

                <button onClick={createUser}>Create this user</button>
                {userCreated && <h3>User has been created, you can now login</h3>}
                {badLogin && <h3>Wrong, please try again</h3>}
            </>}


            {loggedIn && <>
                <h2>Welcome {user.username}! </h2>
                <button onClick={loggOut}>LogOut</button>
            </>}
        </header>
        <Outlet />
    </>)
}