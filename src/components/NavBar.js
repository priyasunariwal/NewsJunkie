import React, { Component } from 'react'
import {Link}  from "react-router-dom";
//removed render funct and exports default line to bellow arrow func to make navbar class based componenet to func based component
const NavBar = ()=>{
    return (
        <>
      <div >
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid py-5 py-lg-2"style={{backgroundColor: "Khaki"}}>
    <Link className="navbar-brand text-danger" to="/">NewsJunkie</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
          <Link className="nav-link text-success " aria-current="page" to="/">Home</Link>
        </li>

        
        <li className="nav-item">
          <Link className="nav-link text-success"  to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-success"  to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-success"  to="/general">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-success"  to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-success"  to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-success"  to="/sports">Sports</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-success"  to="/technology">Technology</Link>
        </li>
        
        
        {/*
        <li className="nav-item dropdown">
          <a className="nav-link text-success dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" to="#">Action</a></li>
            <li><a className="dropdown-item" to="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" to="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link text-success disabled">Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav> 
      </div>
      </>
    )
  }


export default NavBar
