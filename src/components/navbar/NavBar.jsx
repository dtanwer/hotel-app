import './navbar.css'
import {Link, NavLink} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function NavBar() {

  const {loading,error,dispatch}=useContext(AuthContext);
  const {user}=useContext(AuthContext);
  const logout=()=>{
    dispatch({type:"LOGOUT"})
  }

  return (
    <div className="navbar">
    <div className="navContainer">
      <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
      <span className="logo">lamabooking</span>
      </Link>
      {user? <button onClick={logout}>Logout</button> : (<div className="navItems">
        <button className="navButton">Register</button>
        <NavLink to='/login'><button className="navButton">Login</button></NavLink>
      </div>)}
    </div>
  </div>
  )
}
