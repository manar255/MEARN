

const userList = ({filteredUsers,handleDeleteUser}) => {
  return (
    <table className="table">
        <thead>
          <tr>
            <th scope="col">image</th>
            <th scope="col">name</th>
            <th scope="col">phone</th>
            <th scope="col">email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) =>  (
            <tr key={index}>
              <td>
                <img
                  src={user.img}
                  alt=""
                  width={40}
                  className="rounded-circle"
                />
              </td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>
                <a href="#">{user.name.split(" ")[0]}@gmail.com</a>
              </td>
              <td>
                <a href="#"><button className="btn btn-danger" onClick={()=>{handleDeleteUser(user.id)}}>delete</button></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default userList