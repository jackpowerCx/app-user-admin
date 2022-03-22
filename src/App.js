import { useEffect, useState } from "react";
import UserList from "./components/UsersList";
import UsersForm from "./components/UsersForm";
import axios from "axios";
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [togle, setTogle] = useState(false);
  const [togleEdit, setTogleEdit] =useState(false);
  const [togleRemove, setTogleRemove] = useState(false);
  const [editUsers, setEditUsers] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getUsers()
  }, []);

  const getUsers =()=>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then((res) => setUsers(res.data));
  }
  const addUser = (user) => {
    axios.post(`https://users-crud1.herokuapp.com/users/`,user)
         .then(()=>getUsers());
  };

  const upDateUser = (userInfo) => {
   
    axios.put(`https://users-crud1.herokuapp.com/users/${userInfo.id}/`,userInfo)
         .then(()=>getUsers())
  };

  const remove = (id) => {
    setIndex(users.findIndex((user) => user.id === id));
    setTogleRemove(!togleRemove)
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}`)
    .then(()=>getUsers())
  };

  const selectUser = (user) => {
    setEditUsers(user);
  };

const newUser =()=>{
  setEditUsers(null)
}

  return (
    <div className="App">
      <header className="header">
        <h1>USERS</h1>
        <button className="buttonNewUser" onClick={() => {setTogle(!togle);newUser()}}>
          + create new user
        </button>
      </header>
      <UserList 
        className="userList" 
        users={users} 
        remove={remove}
        setTogleEdit={setTogleEdit} 
        setTogleRemove={setTogleRemove}
        selectUser ={selectUser }
      />
      {togle || togleEdit? (
        <UsersForm
          setTogle={setTogle}
          setTogleEdit={setTogleEdit}
          togleEdit={togleEdit}
          addUser={addUser}
          upDateUser={upDateUser}
          users={users}
          editUsers={editUsers}
          selectUser ={selectUser }
          togle={togle}
        
        />
      ) : null}
      {
        togleRemove && 
          <div className="cardRemove">
            <div>
              <h2>Delete user</h2><p
            className="formClosedRemove"
            onClick={() => {
              setTogleRemove(!togleRemove);
            }}
          >
            {" "}
            <b>X</b>
          </p>
            </div>
            
            <p className="pRemove">the user <b>{users[index].first_name} {users[index].last_name}</b> has  been deleted</p>
            <button 
                onClick={() => {
                  setTogleRemove(!togleRemove);
                }} 
                className="buttonForm"
            >Agree</button>
           </div>
      }
    </div>
  );
}

export default App;
