import React from 'react'
function Footer() {



  return (
    <>
    <div className="container-fluid mt-5 pt-5">

      <div className="row bg-light d-flex align-items-center pb-3 pt-4">
      <div className="col-md-4">
      <span>
        <a className='fs-2 text-dark ps-3' href="">
          <ion-icon name="logo-facebook"></ion-icon>
          </a>
          </span>
      <span>
        <a className='fs-2 text-dark ps-3' href="">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
          </span>
      <span>
        <a className='fs-2 text-dark ps-3' href="">
          <ion-icon name="logo-wordpress"></ion-icon>
        </a>
          </span>
      <span>
        <a className='fs-2 text-dark ps-3' href="">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
          </span>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h6 className='text-end pe-3'>© 2024 Orbit Media Studios</h6>
          

        </div>
      </div>
    </div>

    </>
  )
}

export default Footer;