import Header from './H';
import Footer from './Footer'

function Work() {

  return (
    <>
   <Header/>
      <div className="container text-light text-capitalize">
        <div className="row text-center mt-3">
          <h1>work section</h1>
          <div className="row mt-5 pt-5">
            <div className="col-md-4 mt-5 mb-5">
              <img src="IMG/line10.png" height={250} />
            <div className="row mt-2">
            <div className="col-md-6">
            <h3 className='ps-1fs-2 '>arena</h3>
            </div>
              <div className="col-md-6">
              <button className="btn btn-primary text-capitalize w-50 me-3">
              <a href="https://mdmuhim0096.github.io/portfolio_1/#hero" target="_blank">lest go</a>
              </button>
              </div>
              </div>
        </div>

            <div className="col-md-4 mt-5 mb-5">
            <img src="IMG/line11.png" height={250} />
            <div className="row mt-2">
            <div className="col-md-6">
            <h3 className='ps-1fs-2 '>alpin</h3>
            </div>
              <div className="col-md-6">
              <button className="btn btn-primary text-capitalize w-50 me-3">
                <a href="https://mdmuhim0096.github.io/portfolio_3/" target="_blank">lest go</a>
                </button>
              </div>
              </div>
            </div>

            <div className="col-md-4 mt-5 mb-5">
            <img src="IMG/sky1.png" height={250}/>
            <div className="row mt-2">
            <div className="col-md-6">
            <h3 className='ps-1 fs-3 '>barmud</h3>
            </div>
              <div className="col-md-6">
              <button className="btn btn-primary text-capitalize w-50 me-3">
              <a href="https://mdmuhim0096.github.io/portfolio_2/#hero" target="_blank">lest go</a>
              </button>
              </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default Work;