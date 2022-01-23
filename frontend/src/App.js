import Login from "./components/Login"
import Profile from "./components/Profile"
import {Routes,Route} from "react-router-dom"
import RequiredToken from "./components/Authorization"
import './App.css';

function App() {
  return (
    <div className ="App">
    <Routes> 
      <Route path="/login" 
      element = {<Login/>}/>
      <Route path="/profile"
       element = {
       <RequiredToken>
       <Profile/>
       </RequiredToken> }
      />
    </Routes>
    </div>
  );
}

export default App;
