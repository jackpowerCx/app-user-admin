const UserList = ({ users, remove,setTogleEdit,selectUser,setTogleRemove}) => {
    return (
      <div>
        <section className="userList">
          {users.map((user) => (
            <div className="card" key={user.id}>
              <h3>
                {user.first_name} {user.last_name}
              </h3>
              <hr />
              <section>
                <h5>EMAIL</h5>
                <p>{user.email}</p>
                <h5>BIRTHDAY</h5>
                <p>{user.birthday}</p>
                <div>
                  <button onClick={() => remove(user.id) }>remove</button>
                  <button onClick={()=> {setTogleEdit(true);selectUser(user)}}>edit</button>
                </div>
              </section>
            </div>
          ))}
        </section>
      </div>
    );
  };
  export default UserList;
  