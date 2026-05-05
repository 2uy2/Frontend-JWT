import React, { useEffect, useState } from 'react';
import  "./Nav.scss";

import { useLocation ,NavLink} from 'react-router-dom/cjs/react-router-dom.min';
const Nav=(props) =>{
    const [isShow,setIsShow]=useState(false);
    let location = useLocation();
    
    useEffect(()=>{

         let session =sessionStorage.getItem('account');
         if(session){
            setIsShow(true)

        }
         if(location.pathname === '/login'){
             setIsShow(false)
             console.log(setIsShow)
         }
        
    },[])

    return (
        <>
            {isShow===true && 
            <div className="topnav">
                <NavLink  to="/" exact>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Project</NavLink>
                <NavLink to="/users">Users</NavLink>
            </div>
            }
        </>
       
    );
}

export default Nav;