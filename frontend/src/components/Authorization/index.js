import {useLocation,Navigate} from "react-router-dom" 

export const setToken = (token) =>{
    localStorage.setItem("authtoken",token)
} 

export const fetchToken = (token)=>{
    return localStorage.getItem("authtoken") 
} 

const RequiredToken=({children})=>{
    let auth =fetchToken() 
    let location = useLocation()

    if(!auth){
        return <Navigate to="/login" state={{from:location}}/>
    }

    return children
} 

export default RequiredToken