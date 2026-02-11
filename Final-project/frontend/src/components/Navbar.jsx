import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const hl = ()=> {
        localStorage.removeItem('token');
        navigate('/login');
    };

  return <>
  <nav>
    <Link to="/">Register</Link> | <Link to="/login">Login</Link>
    {token && 
    <>
      <Link to="/home">Main Page</Link>
      <button onClick={hl}>Logout</button>
    </>}
  </nav>
  </>
}

export default Navbar