import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const[form,setForm] = useState({name:"",email:"",password:""});
    const navigate =useNavigate();
    const hc = e=> setForm({...form,[e.target.name]:e.target.value});
    const hs = async e=>{
        e.preventDefault();
        await axios.post('http://localhost:5500/api/auth/register',form);
        navigate("/login");
        alert('Register successfully');
    };
  return <>
  <form onSubmit={hs}>
   <input name='name' placeholder='name' onChange={hc}/>
   <br></br>
   <input name='email' placeholder='emai;' onChange={hc}/>
   <br></br>
   <input name='password' placeholder='password' onChange={hc}/>
   <br></br>
   <button>Register</button>
  </form>
  
  
  </>
}

export default Register