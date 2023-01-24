import * as React from 'react';
import {NavLink} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import InfoIcon from '@mui/icons-material/Info';

export default function ButtonAppBar() {
const style ={
  textDecoration: 'none',
  color:"white",
  marginLeft:'2rem',
  fontSize:'1.2em'
}

  return (
    <>
    <nav className="navbar navbar-expand-lg " >
    <div className="container-fluid d-flex mb-3">

    <div className='d-flex me-auto p-2'>
    <NavLink className="navbar-brand link-light flex-grow-1" to="/" style={style}>Logo</NavLink>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon bg-light"></span>
    </button>
    </div>

    <div className="collapse navbar-collapse p-2" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
        <li className="nav-item" >
          <NavLink className="nav-link active  " aria-current="page" to="/" style={style}><HomeIcon/> home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/about" style={style}><InfoIcon/> about</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/service" style={style}><AssignmentIndIcon/> service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/contact" style={style}><CallIcon/> contact</NavLink>
        </li>
      </ul>
    </div>

  </div>
</nav>
</>

  );
}