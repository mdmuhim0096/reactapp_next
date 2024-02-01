import Header from './H'
import Footer from './Footer'

function About() {

  return (
    <>
    <Header/>
      <div className="container">
        <div className="row">
          <div className="row mb-4">
            <h1 className='text-center text-light mt-4 mb-5'>About Section</h1>
          </div>
          <div className="col-md-6 mb-4">
            <img className='d-flex justify-content-center' src="IMG/line10.png" height={310} width={340}/>
          </div>
          <div className="col-md-6 mb-4">
            <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quidem voluptatem praesentium quisquam est eveniet molestiae, ipsam sunt minima. Culpa consequatur iusto suscipit voluptas sunt, recusandae ut dolore vel similique nisi ea et a dolorum asperiores dolores obcaecati at quasi necessitatibus, quaerat pariatur architecto! Voluptates asperiores porro aperiam quidem? Magni corrupti laborum maxime itaque, incidunt placeat debitis dolorum cum, quaerat iusto deleniti explicabo repellendus dignissimos? Exercitationem, corporis odio nihil sunt ut adipisci quos dolor eius eos maiores sed tempora perspiciatis consequatur repellendus, corrupti ullam, dignissimos facere. Et error veniam quidem dignissimos at porro nostrum! Fuga sit temporibus praesentium rem quae.</p>
            <button className='btn btn-primary text-capitalize'>hire me!</button>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default About



