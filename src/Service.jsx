import React from 'react'
import Cards from './Cards'
import Sdata from './Sdata'

const Service = () => {
  return (
    <div>
      <div className="text-center my-5">
        <h1>Our Services</h1>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-10 mx-auto">
            <div className="row gy-3">
              {
                Sdata.map((val,ind)=>{
                 return  <Cards
                    imgsrc={val.img}
                    heading={val.heading}
                    key={ind}
                  />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
