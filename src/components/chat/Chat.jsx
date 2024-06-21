import { useEffect, useRef, useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";


const Chat = () => {

  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState()
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"});
  },[]);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, 'chats', 'TeTsGsAweIewpKGodXGZ'), (res) => {
      setChat(res.data());
    });

    return () => {
      unSub();
    }
  }, []);

  console.log(chat)
  

  const handleEmoji = e => {
    setText( prev => prev+e.emoji );
    setOpen(false);
  };



  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Nala Dixon</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos amet nulla! At quasi ipsa, dolor dignissimos fugit placeat cum?</p>
            <span>1 min ago</span>
          </div> 
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos amet nulla! At quasi ipsa, dolor dignissimos fugit placeat cum?</p>
            <span>1 min ago</span>
          </div> 
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos amet nulla! At quasi ipsa, dolor dignissimos fugit placeat cum?</p>
            <span>1 min ago</span>
          </div> 
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos amet nulla! At quasi ipsa, dolor dignissimos fugit placeat cum?</p>
            <span>1 min ago</span>
          </div> 
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos amet nulla! At quasi ipsa, dolor dignissimos fugit placeat cum?</p>
            <span>1 min ago</span>
          </div> 
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos amet nulla! At quasi ipsa, dolor dignissimos fugit placeat cum?</p>
            <span>1 min ago</span>
          </div> 
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input 
          type="text" 
          placeholder="Type a message..." 
          value={text}
          onChange={ e => setText( e.target.value ) }
        />
        <div className="emoji">
          <img 
            onClick={ () => setOpen( (prev) => !prev ) }
            src="./emoji.png"
          />
          <div className="picker">
            <EmojiPicker 
              open={open}
              onEmojiClick={handleEmoji} 
            />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  )
}

export default Chat