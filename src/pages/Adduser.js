import { useState } from "react";

const AddUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const saveForm = () => {
    console.log('save form');
    console.log('username: ', username);
    console.log('email: ', email);
  }
  return (
    <div>
      <h2>Add User</h2>
      <div>
        <label>Username</label>
        <input 
          type="text"
          onChange={handleUsernameChange}
          value={username} />
      </div>
      <div>
        <label>Email</label>
        <input type="text"
        onChange={handleEmailChange} 
        value={email}/>
      </div>
      <div>
        <button onClick={saveForm}>Save</button>
      </div>
    </div>
  );
}

export default AddUser;