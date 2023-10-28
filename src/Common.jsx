import React from 'react'
import './index.css'

import { Link } from 'react-router-dom'

const Common = (props) => {
  return (
    <section className=' d-flex justify-content-center' >
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 height_100cls  oredr-1 d-flex justify-content-center flex-column" >
                                    <h1>{props.heading} <strong className='brand-name'>TechSomu</strong></h1>
                                    <p>We are the best autority.</p>
                                    <Link to="/service" class="btn btn-outline-primary btn-custom" >{props.btnDtls}</Link>
                                </div>
                                <div className="col-md-6 height_100cls d-flex justify-content-center flex-column">
                                    <img className='img-fluid animate' style={{ height: '400px' }} src={props.image} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Common
