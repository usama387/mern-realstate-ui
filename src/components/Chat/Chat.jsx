import { useState } from "react";
import "./Chat.scss";

const Chat = () => {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="messages"
          />
          <span>Usama Razaaq</span>
          <p>Lorem ipsum dolor sit...</p>
        </div>

        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="messages"
          />
          <span>Usama Razaaq</span>
          <p>Lorem ipsum dolor sit...</p>
        </div>

        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="messages"
          />
          <span>Usama Razaaq</span>
          <p>Lorem ipsum dolor sit...</p>
        </div>
      </div>

      {/* Specific Chat Window when there is chat the div of chatBox will appear */}
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="user"
              />
              Usama Razaaq
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>

            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>

            <div className="chatMessage">
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>

            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>

            <div className="chatMessage">
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
