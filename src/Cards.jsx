import React from 'react'
// import pic from './images/contact.jpg'
import { NavLink } from 'react-router-dom'

const Cards = (props) => {
    return (

        <div className="col-md-4 mx-auto">
            <div class="card" style={{ width: "18rem" }}>
                <img src={props.imgsrc} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title" style={{fontWeight:'bold'}}>{props.heading}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink href="/" class="btn btn-primary">Go somewhere</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Cards
