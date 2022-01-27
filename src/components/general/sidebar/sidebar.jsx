import React from 'react'

import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Netflix</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/movies">Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/favorites">My Favorites</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="text" placeholder="Search" />
                    <button className="btn btn-dark" type="button">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </form>
                </div>
            </div>
        </nav>
    )
}

export default (Sidebar)