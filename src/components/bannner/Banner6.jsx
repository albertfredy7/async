import Spline from '@splinetool/react-spline'
import Link from 'next/link'
import React from 'react'

function Banner6() {
  return (
    <div className="banner-area6 relative  " style={{ height: '100vh' }}  >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: '1',
        opacity: '0.5',
        // Ensure this is behind the content
      }}
        className='d-none d-sm-block'
      >
        {/* <Spline scene="https://prod.spline.design/PSzzw68iXYmaqwpU/scene.splinecode" /> */}
        {/* <Spline scene="https://prod.spline.design/s02nq-h2klbhHpAx/scene.splinecode" /> */}
        {/* <Spline scene="https://prod.spline.design/03ZyMxwoYyyIMntd/scene.splinecode" /> */}
        <Spline scene="https://prod.spline.design/zdYP-xO4W-fwE-ZG/scene.splinecode" />
      </div>

      <div style={{ marginLeft: "%", }}>
        {/* <Spline scene="https://prod.spline.design/F7rBBeI0aV3H8w3d/scene.splinecode" style={{ zIndex: 2, position: 'absolute', top: 40, right: "-25%", scale: '1.5', mixBlendMode:'lighten' }} /> */}
        {/* <Spline scene="https://prod.spline.design/PSzzw68iXYmaqwpU/scene.splinecode" style={{ zIndex: 2,position:'absolute', top: 40, right: "-25%", scale: '1.5' }} /> */}
        {/* <Spline scene="https://prod.spline.design/ZvEdcu8jKkS8-3PD/scene.splinecode" style={{ zIndex: 2,position:'absolute', top: 40, right: "-25%", scale: '1.5' }} /> */}
        {/* <Spline scene="https://prod.spline.design/03ZyMxwoYyyIMntd/scene.splinecode" style={{ zIndex: 2,position:'absolute', top: 40,  scale: '1.3' }} /> */}
      </div>

      <div className="banner-wrap" style={{ zIndex: "2", padding: "10%" }}>

        <div className="social-area">
          <ul>
            <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
            <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
            <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
            <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
          </ul>
        </div>
        <div className="row">

          <div className="">


            <center>
              <div className="banner-content d-flex justify-content-center align-items-center flex-column mb-5 mt-5" style={{ width: '100%', height: '100%', marginTop:'10%' }}>
                <h1 className='m-0 mt-5'>Set Your <span>Business</span><br /><div style={{ textWrap: 'balance' }}>Custom Solutions</div></h1>
                <p className=''>Unlocking Omani business potential with bespoke IT solutions, driving innovation and success</p>
                <div className="banner-btn-group">
                  <Link legacyBehavior href="/contact"><a className="primary-btn3">Free Consultancy</a></Link>
                  {/* <Link legacyBehavior href="/service">
                    <a className="primary-btn5">
                      <svg width={60} height={60} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.51038 32.6729C-0.990382 34.1837 -0.232333 37.9945 2.65612 38.4335C4.97848 38.7866 6.09439 41.4804 4.70164 43.3722C2.96938 45.7248 5.12803 48.9555 7.9646 48.2555C10.245 47.6925 12.3074 49.7548 11.7445 52.0354C11.0445 54.8721 14.2752 57.0306 16.6278 55.2984C18.5196 53.9057 21.2139 55.0216 21.5665 57.3439C22.0054 60.2322 25.8161 60.9904 27.3271 58.4896C28.5419 56.479 31.4581 56.479 32.6729 58.4896C34.1837 60.9904 37.9945 60.2323 38.4335 57.3439C38.7866 55.0215 41.4804 53.9056 43.3722 55.2984C45.7248 57.0306 48.9555 54.872 48.2555 52.0354C47.6925 49.755 49.7548 47.6925 52.0354 48.2555C54.872 48.9555 57.0306 45.7248 55.2984 43.3722C53.9057 41.4804 55.0216 38.7861 57.3439 38.4335C60.2322 37.9946 60.9904 34.1839 58.4896 32.6729C56.479 31.4581 56.479 28.5419 58.4896 27.3271C60.9904 25.8163 60.2323 22.0055 57.3439 21.5665C55.0215 21.2134 53.9056 18.5196 55.2984 16.6278C57.0306 14.2752 54.872 11.0445 52.0354 11.7445C49.7549 12.3075 47.6925 10.2452 48.2555 7.9646C48.9555 5.12795 45.7248 2.96938 43.3722 4.70164C41.4804 6.09426 38.7861 4.9784 38.4335 2.65612C37.9946 -0.23224 34.1839 -0.990422 32.6729 1.51038C31.4581 3.52095 28.5419 3.52095 27.3271 1.51038C25.8163 -0.990382 22.0055 -0.232333 21.5665 2.65612C21.2134 4.97848 18.5196 6.09439 16.6278 4.70164C14.2752 2.96938 11.0445 5.12803 11.7445 7.9646C12.3075 10.245 10.2452 12.3074 7.9646 11.7445C5.12795 11.0445 2.96938 14.2752 4.70164 16.6278C6.09426 18.5196 4.9784 21.2139 2.65612 21.5665C-0.232239 22.0054 -0.990423 25.8161 1.51038 27.3271C3.52095 28.5419 3.52095 31.4581 1.51038 32.6729Z" />
                      </svg>
                      <div className="content">
                        VIEW all work
                        <span>
                          <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                          </svg>
                        </span>
                      </div>
                    </a>
                  </Link> */}
                </div>
              </div>
            </center>

          </div>
          <div className="col-xxl-6 col-lg-7 d-flex jsutify-content-end">
            <div className="banner-img-wrap">
              <div className="swiper banner5-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">







                  </div>
                  {/* <div className="swiper-slide">
                  <div className="banner-img">
                    <img className="img-fluid" src="assets/img/home-6/home6-banner-img.png" alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-img">
                    <img className="img-fluid" src="assets/img/home-6/home6-banner-img2.png" alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-img">
                    <img className="img-fluid" src="assets/img/home-6/home6-banner-img3.png" alt="" />
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner6
