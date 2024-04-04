import React from "react";
import  {} from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
const NotFounfPage = () => {
    return (
        <div className="container text-center">
            <div className="display-1 text-danger">404 - not found </div>
            <p className="text-warning"> has benn removed</p>
            <button as={Link} to={"/"}> go to home page</button>
            home
        </div>
    )
}

export default NotFounfPage;