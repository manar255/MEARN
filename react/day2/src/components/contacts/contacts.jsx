import  { useState } from 'react'

import Header from './header'

import Users from './users'

const Contacts = () => {
  
    const [users, setUsers] = useState([]);
    const [nameInput, setNameInput] = useState("");
    const [imgInput, setImgInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(users);
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
      setUsers([...users, { id:users.length,name: nameInput||'name', img: imgInput||'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid', phone: phoneInput ||'00000000000'}]);
    
      setNameInput('');
      setImgInput('');
      setPhoneInput('');
    };
    
    console.log(users);
  
    return (
      <>
        <div className="container ">
          <div className="d-flex flex-column gap-5">
            <Header handleNameInput={handleNameInput} nameInput={nameInput} handlePhoneInput={handlePhoneInput} phoneInput={phoneInput} handleImgInput={handleImgInput} imgInput={imgInput} handleAddUser={handleAddUser}/>
            <Users  filteredUsers={filteredUsers} setFilteredUsers={setFilteredUsers} users={users} setUsers={setUsers}/>
          </div>
        </div>
      </>
    );
}

export default Contacts