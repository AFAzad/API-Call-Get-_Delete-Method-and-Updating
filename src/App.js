// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
const[user,setUser]=useState([])

  useEffect(()=>{
    getList()
    
  },[]);

  function getList(){
    fetch('https://jsonplaceholder.typicode.com/comments').then((result)=>{
      result.json().then((resp)=>{
        setUser(resp)
      })
    })
  }

  function deleteUser(id){
    fetch(`https://jsonplaceholder.typicode.com/comments${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((response)=>{
        getList()

      })

    })
  }


  
  return (
    <div className="App">

      <h1>API Call GET and DELETE</h1>
      <table border="2">
        <tbody>
          <tr>
            <td>Post Id</td>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Body</td>
          </tr>
          {
            user.map((data,i)=>
              <tr key={i}>
            <td>{data.postId}</td>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.body}</td>
            <td><button onClick={()=>deleteUser(data.id)}>Delete</button></td>
              </tr>

            )
          }
        </tbody>
      </table>
    
    </div>
  );
}

export default App;
