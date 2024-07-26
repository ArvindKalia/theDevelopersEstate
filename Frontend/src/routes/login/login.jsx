import "./login.scss"
import { Link, useNavigate } from "react-router-dom"
// import axios from "axios"
import apiRequest from "../../lib/apiRequest"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"

function Login(){
    const { updateUser } = useContext(AuthContext)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate= useNavigate()
    const handleSubmit=async(e)=>{
        setIsLoading(true)
        setError("")
        e.preventDefault()
        const formData= new FormData(e.target)
        const username=formData.get("username")
        const password=formData.get("password")

        try{
            const res= await apiRequest.post("/auth/login",{
                username,password
            })
            updateUser(res.data)
            navigate("/")
        }catch(err){
            setError(err.response.data.message)
        } finally{
            setIsLoading(false)
        }
    }
    
    return (
        <div className="login">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input type="text" name="username" required minLength={3} maxLength={20} placeholder="Username" />
                    <input type="password" name="password" required placeholder="Password" />
                    <button disabled={isLoading}>Login</button>
                    {error && <span>{error}</span>}
                    <Link className="register" to="/register">Don't have an account?</Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />

            </div>
        </div>
    )
}

export default Login