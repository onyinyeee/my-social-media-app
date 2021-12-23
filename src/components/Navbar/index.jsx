import {
    NavLink
}from 'react-router-dom';
import "./styles.css";
import { Logout } from "../Logout";



export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                <NavLink exact={true} activeClassName="nav-selected" className="netLogo" to="/">
                   timeline
                    </NavLink>
                   
                </li>
                <li>
                    <NavLink  activeClassName="nav-selected" className="netLogo" to="/profile">
                    profile
                    </NavLink>
                </li>

                <li>
                    <Logout/>
                </li>
                <li>
                    <NavLink activeClassName="nav-selected" to="/addpost"> Add New Post</NavLink>
                </li>
                
            </ul>
        </nav>
    )
}