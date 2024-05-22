import React from 'react'
import Marquee from "react-fast-marquee";
function Partner3() {
  return (
    <div className="home3-partner-area" id="home3-partner-area">
  <div className="container-fluid">
    <div className="row g-4">
      <div className="col-lg-3">
        <div className="partner-title">
          <h3>Our Collaborators</h3>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="partner-wrapper">
            <Marquee className='marquee_text' autoFill={true}>
            <img src="assets/img/Partners/Adobe.svg" width={100} alt="" />
            
            
            </Marquee>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Partner3
