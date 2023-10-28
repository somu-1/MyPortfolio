import React, { useState } from 'react'

const Contact = () => {
  const [inputVal, setInputVal] = useState({
    fullname: '',
    email: '',
    phone: '',
    msg: ''

  });
  const inputChange = (e) => {
    const { name, value } = e.target;
    setInputVal((prevValue) => {
      return {
        ...prevValue,
        [name]:value,
      }
    })
  }

  const formSubmit = (e) => {
e.preventDefault();
alert(`Hello ${inputVal.fullname}. My phone no is ${inputVal.phone}. My gamil is ${inputVal.email}. And here i wanna say that ${inputVal.msg}`)
  }
  return (
    <>
      <div className="text-center my-5">
        <h1>Contact Us</h1>
      </div>
      <div class="container-fluid ">
        <div class="row">
          <div class="col-4 mx-auto">

            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  name='fullname'
                  value={inputVal.fullname}
                  onChange={inputChange}
                  placeholder="Enter your name" />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  name='email'
                  value={inputVal.email}
                  onChange={inputChange}
                  placeholder="Enter your Email" />


              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input
                  type="number"
                  class="form-control"
                  name='phone'
                  value={inputVal.phone}
                  onChange={inputChange}
                  placeholder="Enter your Phone No." />


              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Messages</label>
                <textarea
                  class="form-control"
                  rows="3"
                  name='msg'
                  value={inputVal.msg}
                  onChange={inputChange}
                  placeholder='Meassages'></textarea>


              </div>
              <button type="submit" class="btn btn-outline-primary btn-custom">Submit</button>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
