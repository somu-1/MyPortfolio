import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
            <div class="container-fluid text-center">
                <div class="row">
                    <div class="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <NavLink  className="nav-link" to="#">TechSomu</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <NavLink activeClassName="active" className="nav-link " to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="active" className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="active" className="nav-link" to="/service">Services</NavLink>
                                        </li>
                                        
                                    </ul>
                                    
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
    )
}

export default Navbar
