import { useNavigate } from "react-router"

const Profile =()=>{
    const navigate = useNavigate() 

    const signOut=()=>{
        localStorage.removeItem("authtoken")
        navigate("/login")
    }

    return(
        <>
        <div>
        <h1>Profile Page</h1>
        <p>Hello,code ninjas welcome To profile Page</p> 
        <button type="button" onClick={signOut}>sign out</button>

        </div>
        </>
    )
}

export default Profile