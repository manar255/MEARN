import { useState } from "react";
import { TiUserAdd } from "react-icons/ti";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Users from './users'
function App() {
  
  const [users, setUsers] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [imgInput, setImgInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  let handleNameInput = (e) => {
    setNameInput(e.target.value);
  };
  let handlePhoneInput = (e) => {
    setPhoneInput(e.target.value);
  };
  let handleImgInput = (e) => {
    setImgInput(e.target.value);
  };

  let handleAddUser = () => {
    setUsers([...users, { name: nameInput||'name', img: imgInput||'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid', phone: phoneInput ||'00000000000'}]);
    setNameInput('');
    setImgInput('');
    setPhoneInput('');
  };
  console.log(users);

  return (
    <>
      <div className="container ">
        <div className="d-flex flex-column gap-5">
          <h2 className="text-primary">Add contact</h2>
          <div className=" row align-items-center justify-content-around ">
            <input
              type="text"
              placeholder="Name"
              className="col-3"
              value={nameInput}
              onChange={(e) => {
                handleNameInput(e);
              }}
            />
            <input
              type="text"
              placeholder="Phone"
              className="col-3"
              value={phoneInput}
              onChange={(e) => {
                handlePhoneInput(e);
              }}
            />
            <input
              type="text"
              placeholder="img_url"
              className="col-3"
              value={imgInput}
              onChange={(e) => {
                handleImgInput(e);
              }}
            />
            <button
              className="btn btn-primary rounded-pill d-flex gap-2 align-items-center w-auto "
              onClick={handleAddUser}
            >
              <TiUserAdd />
              click
            </button>
          </div>
          <Users users={users}/>
        </div>
      </div>
    </>
  );
}

export default App;
