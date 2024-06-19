import { useState } from "react"
import "./chatList.css"
import AddUser from "./addUser/AddUser"

const ChatList = () => {

  const [addMode, setAddMode] = useState(false)


  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input type="text" placeholder="Search..." />
        </div>
        <img 
          onClick={()=> setAddMode( (prev) => !prev )}
          src={addMode ? "./minus.png" : "./plus.png"} 
          className="add"
        />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Nala Dixon</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Nala Dixon</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Nala Dixon</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Nala Dixon</span>
          <p>Hello</p>
        </div>
      </div>
      { addMode && <AddUser />}
    </div>
  )
}

export default ChatList