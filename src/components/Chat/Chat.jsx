import "./Chat.scss";

const Chat = () => {
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
      <div className="chatBox">Box</div>
    </div>
  );
};

export default Chat;
