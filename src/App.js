import './App.css';
import { useState } from 'react';
import Form from './component/Form'
import Input  from './component/Input';
import Button from './component/Button';

function App() {
  const [user,setUser]=useState({
    userName:"",
    password:""
  })
const name="abdulkerim"
const passwd="1234"
   const onValidation=()=>{
   if(user.userName===name && user.password===passwd){
    alert("login is succesful")
   }
   }
   
  return (
    <div className="App1">  
    <Form>
       <h1>Form example</h1>
       <Input typee={"email"} value={user.userName} placeholder="userName" whenChange={(e)=>{setUser({...user,userName:e.target.value})}}/>
       <Input typee={"password"} value={user.password} placeholder="password" whenChange={(e)=>{setUser({...user,password:e.target.value})}}/>
       <Button onValidation={onValidation}/>
       <h1>{`userName: ${user.userName}`}</h1>
       <h1>{`password: ${user.password}`}</h1>
    </Form>
    </div>
  );
}

export default App;
