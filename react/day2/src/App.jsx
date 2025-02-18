import { useState } from "react";
import { TiUserAdd } from "react-icons/ti";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);
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
    setUsers([...users, { name: nameInput, img: imgInput, phone: phoneInput }]);
  };
  console.log(users);

  return (
    <>
      <div className="container ">
        <div className="d-flex flex-column gap-5">
          <div className=" row align-items-center justify-content-around ">
            <input
              type="text"
              placeholder="Name"
              className="col-3"
              onChange={(e) => {
                handleNameInput(e);
              }}
            />
            <input
              type="text"
              placeholder="Phone"
              className="col-3"
              onChange={(e) => {
                handlePhoneInput(e);
              }}
            />
            <input
              type="text"
              placeholder="img_url"
              className="col-3"
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
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">image</th>
                  <th scope="col">name</th>
                  <th scope="col">phone</th>
                  <th scope="col">email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>
                      <img src={user.img} alt="" width={40} />
                    </td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>
                      <a href="#">{user.name}@gmail.com</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
