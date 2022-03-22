import { useEffect, useState } from "react";

const UsersForm = ({ addUser, upDateUser, users, editUsers, setTogle,selectUser,setTogleEdit,togleEdit,togle}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    if (editUsers) {
      setEmail(editUsers.email);
      setPassword(editUsers.password);
      setFirst_name(editUsers.first_name);
      setLast_name(editUsers.last_name);
      setBirthday(editUsers.birthday);
    } else {
      setEmail("");
      setPassword("");
      setFirst_name("");
      setLast_name("");
      setBirthday("");
    }
  }, [editUsers]);

  const onSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      id: users.length + 1,
      email,
      password,
      first_name,
      last_name,
      birthday
    };
    if (editUsers) {
      userInfo.id = editUsers.id;
      upDateUser(userInfo);
    } else {
      addUser(userInfo);
    }
  };
  return (
    <div className="backForm">
      <form className="form" onSubmit={onSubmit}>
        <div className="formHeader">
            {
                togleEdit? <h2 id="formNewUser">Edit user</h2> :<h2 id="formNewUser">New user</h2>
            }
          
          <p
            className="formClosed"
            onClick={() => {
              setTogle(false);
              setTogleEdit(false);
            }}
          >
            {" "}
            <b>X</b>
          </p>
        </div>

        <div className="input-container">
          <label htmlFor="firts_name" id="firts_name">
            Firts name
          </label>
          <input
            type="text"
            onChange={(e) => setFirst_name(e.target.value)}
            id="firts"
            value={first_name}
          />
        </div>
        <div className="input-container">
          <label htmlFor="last_name" id="last_name">
            Last name
          </label>
          <input
            type="text"
            onChange={(e) => setLast_name(e.target.value)}
            id="last"
            value={last_name}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email" className="email">
            Email
          </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            value={email}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password" className="password">
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            value={password}
          />
        </div>
        <div className="input-container">
          <label htmlFor="birthday" className="birthday">
            Birthday
          </label>
          <input
            type="date"
            onChange={(e) => setBirthday(e.target.value)}
            id="birthday"
            value={birthday}
          />
        </div>
        {
            togleEdit? <button className="buttonForm">Save Changes</button>:<button  className="buttonForm">Create new user</button>
        }
      </form>
    </div>
  );
};
export default UsersForm;