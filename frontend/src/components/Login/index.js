import { useState } from "react"
import { useNavigate } from "react-router"
import { fetchToken ,setToken} from "../Authorization"
import axios from "axios"
import "./index.css"  


const Login =()=>{
    const navigate = useNavigate() 
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const login=()=>{
        if((username === "") & (password === "")){
            return;
        }else{
            axios.post("http://127.0.0.1:8000/login",{
                username:username,
                password:password,
            })
            .then(function(response){
                console.log(response.data.token,"response.data.token")
                if(response.data.token){
                    setToken(response.data.token)
                    navigate("/profile")
                }
            })
            .catch(function(error){
                console.log(error,"error")
            })
        }
    }


    const changeUsername = (event)=>(
        setUsername(event.target.value)
    )

    const changePassword=(event)=>(
        setPassword(event.target.value)
    )

    const logged = ()=>(
        <p>You are Logged in</p>
    )

    const notLogged=()=>(
        <div >
            <form className="card-container">
                <div className="input-card">
                <label htmlFor="text">Input Username</label>
                <input type="text" id="text" onChange={changeUsername}/>
                </div>
                <div>
                <label htmlFor="password">Input Password</label>
                <input type="text" id="password" onChange={changePassword}/>
                </div>
                <button type="button" onClick={login}>Login</button>
            </form>
        </div>
    )
    
    return(
        <>
        <div className="background-container">
            <h1>Login Page</h1>
            <div >
                {fetchToken()?logged():notLogged()}
            </div>
        </div>


        </>

    )
}

export default Login