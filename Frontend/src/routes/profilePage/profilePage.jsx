import List from "../../components/list/list";
import "./profilePage.scss"
import Chat from "../../components/chat/chat";
import apiRequest from "../../lib/apiRequest"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ProfilePage() {
    const navigate = useNavigate()
    const { currentUser, updateUser } = useContext(AuthContext)

    const handleLogout = async () => {
        try {
            await apiRequest.post("/auth/logout")
            updateUser(null)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <Link to="/profile/update">
                        <button>Update Profile</button>
                        </Link>
                    </div>
                    <div className="info">
                        <span>
                            Avatar:
                            <img src={currentUser.avatar || "/noAvatar.png"} alt="" />
                        </span>
                        <span>Username: <b>{currentUser.username}</b></span>
                        <span>Email: <b>{currentUser.email}</b></span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <button>Ceate New Post</button>
                    </div>
                    <List />
                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <List />
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;