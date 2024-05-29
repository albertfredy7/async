import React from 'react'
import Marquee from "react-fast-marquee";
function Partnar6() {
  return (
    <div className="home6-partner-area sce-mar">
      <div className="container-fluid">
        <div className="row mb-55">
          <div className="col-lg-12 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="section-title-6 text-center">
              <span>Our Clients</span>
              <h5>We Worked With Global Largest Brands</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="marque-wrap">
              <div className="marquee_text3" style={{opacity:'0.4' , overflowY:"hidden"}}>
                <Marquee
                  autoFill
                >
                  <div className="single client" >
                    <img src="assets/img/clients/nama.svg" width={'150px'} height={'150px'} className='mx-5' alt="" />
                  </div>
                  <div className="single client">
                    <img src="assets/img/clients/cloud-sanad.svg" width={'150px'} height={'150px'} className='mx-5' alt="" />
                  </div>
                  <div className="single client">
                    <img src="assets/img/clients/invest-oman.svg" width={'150px'} height={'150px'} className='mx-5' alt="" />
                  </div>
                  <div className="single client">
                    <img src="assets/img/clients/mosd.svg" width={'150px'} height={'150px'} className='mx-5' style={{ filter: 'invert(100%)' }} alt="" />
                  </div>
                  <div className="single client">
                    <img src="assets/img/clients/MOCI.svg" width={'150px'} height={'150px'} className='mx-5' alt="" />
                  </div>
                  <div className="single client">
                    <img src="assets/img/clients/mem.svg" width={'150px'} height={'150px'} className='mx-5' alt="" />
                  </div>
                  <div className="single client">
                    <img src="assets/img/clients/force.svg" width={'150px'} height={'150px'} className='mx-5' alt="" />
                  </div>
                  <div className="single client">
                    <img src="assets/img/clients/alyarubi.svg" width={'150px'} height={'150px'} className='mx-5' alt="" />
                  </div>
                  <div className="single client">
                    <img src="assets/img/clients/klinik.svg" width={'150px'} height={'100px'}  className='mx-5' alt="" />
                  </div>

                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partnar6
