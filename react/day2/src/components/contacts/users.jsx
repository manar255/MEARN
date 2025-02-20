import { useEffect, useState } from "react";
import  UserList from "./userList";

const Users = ({ users, setUsers ,setFilteredUsers,filteredUsers}) => {

  const [searchInput, setSearchInput] = useState("");
  
  useEffect(() => { 
      setFilteredUsers(users);
     
    let filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchInput,users]);


  const handleChange = (e) => {

    setSearchInput(e.target.value)
    
  }

  let handleDeleteUser=(userId)=>{
    let filtered=users.filter(user=>user.id!==userId)
    setUsers(filtered)
  }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="search"
          className="form-control"
          onChange={(e) => handleChange(e)}
        />
      </div>
      {users.length ?<UserList filteredUsers={filteredUsers} handleDeleteUser={handleDeleteUser}/>: <h1 className="p-5 text-secondary bg-light m-5" >no users</h1>}
      
    </div>
  );
};

export default Users;
