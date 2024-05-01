import Chat from "../../components/Chat/Chat";
import List from "../../components/List/List";
import "./ProfilePage.scss";

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar :
              <img
                src="https://images.pexels.com/photos/12954030/pexels-photo-12954030.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="user"
              />
            </span>
            <span>
              Username:<b>Usama Razaaq</b>
            </span>
            <span>
              Email: <b>usamarazaaq3@gamil.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
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
  );
};

export default ProfilePage;
