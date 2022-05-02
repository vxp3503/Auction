import Layout from "./Components/Layout/Layout";
import Index from "./Components/index";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {Routes,Route} from 'react-router-dom'

function App() {
  const[List,setList]=useState({"present":0,
  "List":[]
})

const [user,setUser]=useState({
  "username":"",
  "email": "",
  "first_name": "",
  "last_name": "",
  "watchlist": []
})
    useEffect(()=>{
    axios({
        method: "get",
        url: "http://localhost:8000/",
    }).then(function (response) {
        console.log(response.data)
        setList(response.data) 
        console.log(List)
    })
        .catch(function (error) {
            console.log(error);
        })},[]);
        
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Layout Login={true} user={user}/>}/>
        <Route path="/" element={<Layout iscreated={false} Login={false} isLoggin={true} active={false} List={List} welcome={true}/>}/>
        <Route path="/active" element={<Layout iscreated={false} Login={false} isLoggin={true} active={true} List={List}/>}/>
        <Route path="/login" element={<Layout iscreated={false} Login={false} isLoggin={true}/>}/>
        <Route path="/register" element={<Layout iscreated={false} Login={false} isLoggin={false}/>}/>
        <Route path="/login1" element={<Layout iscreated={true} Login={false} isLoggin={true}/>}/>
      </Routes>
    </div>
  );
}

export default App;
