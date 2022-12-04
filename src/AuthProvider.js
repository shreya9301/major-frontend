import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
  let [user,setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
  //const history = useNavigate()

  let loginUser = async (e )=> {
    e.preventDefault()
    let response = await fetch('http://127.0.0.1:8000/token/', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'email':e.target.email.value,'username':e.target.username.value, 'password':e.target.password.value})
    })

    let data = await response.json()

    if(response.status === 200){
        setAuthTokens(data)
        setUser(jwt_decode(data.access))
        localStorage.setItem('authTokens', JSON.stringify(data))
        redirect('/main')
    }else{
        alert('Something went wrong!')
    }
  }

  let logoutUser = () => {
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem('authTokens')
    redirect('/login')
  }


  let contextData = {
          user:user,
          authTokens:authTokens,
          loginUser:loginUser,
          logoutUser:logoutUser,
  }
  return (
    <AuthContext.Provider value={{ contextData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;