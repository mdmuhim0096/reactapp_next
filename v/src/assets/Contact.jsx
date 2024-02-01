import React from 'react'
import Header from './H'
import Footer from './Footer'

function Contact() {
  return (
    <div>
        <Header/>
    <div className="container text-light">
      <div className="row">
        <div className="row">
          <h1 className='text-center m-3 mb-5'>Contact Section</h1>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <form className=''>
  <div className="form-row">
  <div className="form-group col-md-8 w-100">
      <label htmlFor="inputEmail4">Name</label>
      <input type="text" className="form-control mb-3" id="inputEmail4" placeholder="Name" required/>
    </div>
    <div className="form-group col-md-8 w-100">
      <label htmlFor="inputEmail4">Email</label>
      <input type="email" className="form-control mb-3" id="inputEmail4" placeholder="Email" required/>
    </div>
    <div className="form-group col-md-8 w-100">
      <label htmlFor="inputPassword4">Password</label>
      <input type="password" className="form-control mb-3" id="inputPassword4" placeholder="Password" required/>
    </div>
  </div>
  <div className="form-group col-md-8 w-100">
    <label htmlFor="inputAddress">Address</label>
    <input type="text" className="form-control w-100 mb-3" id="inputAddress" placeholder="1234 Main St" required/>
  </div>

  <div className="form-row">
    <div className="form-group col-md-8 w-100">
      <label htmlFor="inputCity">City</label>
      <input type="text" className="form-control w-100 mb-3" id="inputCity" placeholder='Dhaka, Bangladesh' required />
    </div>
    <div className="form-group col-md-8 w-100">
      <label htmlFor="inputState">Subject</label>
      <input className='form-control' type="text" id='inputState' placeholder='Subject' required/>
    </div>

  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input w-10 mt-3" type="checkbox" id="gridCheck" />
      <label className="form-check-label mb-3 mt-3" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary w-50">Sign in</button>
</form>
        </div>
        <div className="col-md-2"></div>
      </div>

  </div>
        <Footer/>
    </div>
  )
}

export default Contact