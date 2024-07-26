import { useState } from "react"
import "./chat.scss"

function Chat() {
    const [chat, setchat] = useState(true)
    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...
                    </p>
                </div>
            </div>
            {chat && (<div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="" />
                        John Doe
                    </div>
                    <span className="close" onClick={()=>setchat(null)}>X</span>
                </div>
                <div className="center">
                    <div className="chatMessage own">
                        <p>Lorem, ipsum dolor</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem, ipsum dolor</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem, ipsum dolor</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem, ipsum dolor</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem, ipsum dolor</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem, ipsum dolor</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem, ipsum dolor</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem, ipsum dolor</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>)}
        </div>
    )
}

export default Chat