import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen,faTrashCan} from '@fortawesome/free-solid-svg-icons';

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
                <div className='icons'>
              
                  <FontAwesomeIcon icon={faTrashCan} onClick={() => remove(user.id) } id="faTrashCan"/>
                  <FontAwesomeIcon icon={faPen} onClick={()=> {setTogleEdit(true);selectUser(user)}} id="faPen"/>
                 
                </div>
              </section>
            </div>
          ))}
        </section>
      </div>
    );
  };
  export default UserList;
  