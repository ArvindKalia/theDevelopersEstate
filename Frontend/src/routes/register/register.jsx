import "./register.scss"
import { Link, useNavigate } from "react-router-dom"
// import axios from "axios"
import apiRequest from "../../lib/apiRequest"
import { useState } from "react"

function Register() {
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")
        const formData = new FormData(e.target);

        const username = formData.get("username")
        const email = formData.get("email")
        const password = formData.get("password")

        try {
            await apiRequest.post("/auth/register", {
                username, email, password
            })
            navigate("/login")
        } catch (err) {
            setError(err.response.data.message)
        } finally{
            setIsLoading(false)
        }
    }
    return (
        <div className="register">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Create an Account</h1>
                    <input type="text" name="username" placeholder="Username" />
                    <input type="text" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <button disabled={isLoading}>Register</button>
                    {error && <span>{error}</span>}
                    <Link className="login" to="/login">Do you have an account?</Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />

            </div>
        </div>
    )
}

export default Register