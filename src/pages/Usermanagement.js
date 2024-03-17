import React from 'react'
import { Link } from "react-router-dom";

 const Usermanagement = () => {

  const users =[
    {
      username:'angeela',
      em: 'iwei',
      age: 32,
      score: 3
    },
    {
      username:'Anish',
      em: 'iwei',
      age: 32,
      score: 3
    },
    {
      username:'Chubin',
      em: 'iwei',
      age: 32,
      score: 3
    }
  ]
  return (
    <div>
      <div>Usermanagement</div>
      <Link to="/user-management/add">Add User</Link>
            
    <h1> Report sheet </h1>
    <table>
      <tr>
       <th> Username</th>
       <th> Email</th>
       <th> Age</th>
       <th>Score</th>
       
    </tr>
    {
      users.map ((row) =>{
        return(
          <tr>
            <td>{row.username}</td>
            <td>{row.em}</td>
            <td>{row.age}</td>
            <td>{row.score}</td>

         
          </tr>
        )
      })
    }
    </table>
    </div>
    
  )
}
export default Usermanagement;
