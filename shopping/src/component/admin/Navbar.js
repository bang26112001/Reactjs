import React from 'react'
export default function Navbar(props){
     return <div className="navbar">
         <button className="btn primary-btn" onClick={props.toggleSidebar}>OPEN
         </button>
         Navbar
     </div>
    
}