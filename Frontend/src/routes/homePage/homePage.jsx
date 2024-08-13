import("./homePage.scss")
import SearchBar from "../../components/searchBar/searchBar.jsx"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext.jsx"

function HomePage() {   
    const { currentUser } = useContext(AuthContext)
    // console.log(currentUser)
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                <SearchBar />
                    <h1 className="title">
                    "Unlock Your Ideal Home: <br />Canada's Ultimate Real Estate Experience"
                    </h1>
                    <p>Explore Canada’s top properties with ease. Find, compare, and secure your dream home effortlessly with our innovative real estate app
                    </p>
                    
                    
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg_1.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage