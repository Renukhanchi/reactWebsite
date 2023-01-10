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
    <nav class="navbar navbar-expand-lg " >
    <div class="container-fluid d-flex mb-3">

    <div className='d-flex me-auto p-2'>
    <NavLink class="navbar-brand link-light flex-grow-1" to="/" style={style}>Logo</NavLink>
    <button  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  class="navbar-toggler-icon bg-light"></span>
    </button>
    </div>

    <div class="collapse navbar-collapse p-2" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 " >
        <li class="nav-item" >
          <NavLink class="nav-link active  " aria-current="page" to="/" style={style}><HomeIcon/> home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link " to="/about" style={style}><InfoIcon/> about</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link " to="/service" style={style}><AssignmentIndIcon/> service</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link " to="/contact" style={style}><CallIcon/> contact</NavLink>
        </li>
      </ul>
    </div>

  </div>
</nav>
</>

  );
}