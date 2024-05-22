import React from 'react';
import Marquee from "react-fast-marquee";

function Partner3() {
  return (
    <div className="home3-partner-area" id="home3-partner-area" style={{ maxHeight: '500px', overflowY: 'auto' }}>
      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-lg-3">
            <div className="partner-title">
              <h3>Our Collaborators</h3>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="partner-wrapper">
              {/* Wrapper div to hide overflow */}
              <div style={{ overflow: 'hidden' }}>
                <Marquee className='marquee_text' autoFill={true} speed={50}>
                  {/* Adobe */}
                  <img src="/assets/img/Partners/Adobe.png" alt="Adobe" style={{ width: '150px', height: 'auto', filter: 'grayscale(100%) invert(100%)' }} />
                  <img src="assets/img/home-3/star.svg" alt="" />

                  {/* DigiCert */}
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/DigiCert_logo.svg/1280px-DigiCert_logo.svg.png" alt="DigiCert" style={{ width: '150px', height: 'auto', filter: 'grayscale(100%) invert(100%)' }} />
                  <img src="assets/img/home-3/star.svg" alt="" />

                  {/* Comodo */}
                  <img src="https://cheapsslsecurity.com/p/wp-content/uploads/2019/10/comodo-platinum-partner.png" alt="Comodo" style={{ width: '150px', height: 'auto', filter: 'grayscale(100%) invert(100%)' }} />
                  <img src="assets/img/home-3/star.svg" alt="" />

                  {/* CSanad */}
                  <img src="https://cloudsanad.com/wp-content/uploads/2024/03/csanad_logo_white.png" alt="CSanad" style={{ width: '150px', height: 'auto', filter: 'grayscale(100%)' }} />
                  <img src="assets/img/home-3/star.svg" alt="" />

                  {/* Another CSanad */}
                  <img src="https://res.cloudinary.com/protenders/image/upload/s--MpmgPKnR--/c_limit,d_default_logo,dpr_auto,f_auto,fl_progressive:semi,q_auto:eco,w_auto:100/5aa6a215b7f07e02895ba19e767b7e07.jpg" alt="CSanad" style={{ width: '150px', height: 'auto', filter: 'grayscale(100%) invert(100%)', mixBlendMode:"screen"  }} />
                  <img src="assets/img/home-3/star.svg" alt="" />

                  {/* Yet another CSanad */}
                  <img src="https://pbs.twimg.com/profile_images/1789602212345196544/QMOEzO24_400x400.jpg" alt="CSanad" style={{ width: '150px', height: 'auto', filter: 'grayscale(100%) ', mixBlendMode:"multiply",scale:'.9' }} />
                  <img src="assets/img/home-3/star.svg" alt="" />

                  {/* Last CSanad */}
                  <img src="https://alyarubi-group.com/gallery_gen/761703ef61092dfe6af6f4725a578b3a_456x120.png" alt="CSanad" style={{ width: '150px', height: 'auto', filter: 'grayscale(100%) ', mixBlendMode:"screen" }} />
                  <img src="assets/img/home-3/star.svg" alt="" />

                  {/* Additional Adobe */}
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGUaZwWmP2UBq02cqczCHbZNvWeIom-B4Udndwac7EBw&s" alt="Adobe" style={{ width: '150px', height: 'auto', filter: 'grayscale(100%) invert(100%) ', scale:'1',mixBlendMode:'screen' }} />
                  <img src="assets/img/home-3/star.svg" alt="" />

                  {/* Dynamics 365 */}
                  <img src="https://1000logos.net/wp-content/uploads/2021/12/Dynamics-365-logo.png" alt="Adobe" style={{ width: '150px', height: 'auto', filter: 'grayscale(100%) invert(100%) ',mixBlendMode:'screen' }} />
                  <img src="assets/img/home-3/star.svg" alt="" />
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner3;