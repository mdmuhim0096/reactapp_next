
import Header from './H';
import Footer from './Footer';
import {Link} from 'react-router-dom'

function Home() {

  return (
    
    <>
    <Header/>
    <div className="container text-capitalize p-2">
    <div className="row mt-5 pt-5">
        <div className="col-md-12">
          <h1 className='text-light text-center'>hey you</h1>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-12">
          <h1 className='text-light text-center'>Let your journey begin with us</h1>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-4"></div>
        <div className="col-md-2 d-flex justify-content-center p-3">

        <Link className="nav-link active" to={"/Contact"}>
          <button className='btn btn-primary text-capitalize'>hire me!</button>
        </Link>
        </div>
        <div className="col-md-2 d-flex justify-content-center p-3">

        <Link className="nav-link active" to={"/Contact"}>
        <button className='btn btn-success text-capitalize'>contact me!
        </button>
        </Link>

        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
    <Footer/>
    
    </>
  )} export default Home;