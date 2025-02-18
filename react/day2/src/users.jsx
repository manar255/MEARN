const users = (props) => {
  const UserEmail = (name) => {
    const firstName = name.split(" ")[0];

    return `${firstName}@gmail.com`;
  };

  return (
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
          {props.users.map((user, index) => (
            <tr key={index}>
              <td>
                <img src={user.img} alt="" width={40} />
              </td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>
                <a href="#">{UserEmail(user.name)}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default users;
