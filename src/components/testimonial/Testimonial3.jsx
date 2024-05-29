import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

function Testimonial3() {
  const slider = useMemo(() => {
    return {
      loop: true,
      spaceBetween: 30,
      speed: 2000,
      centeredSlides: true,
      navigation: {
        nextEl: ".nextbtn2",
        prevEl: ".prevbtn2",
      },
      autoplay: {
        delay: 5000
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1.5,
        },
        992: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 2,

        },
        1400: {
          slidesPerView: 2
        },
      }
    }
  }, [])
  return (
    <div className="home3-testimonil-area sec-mar">
      <div className="container">
        <div className="row mb-55 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="col-lg-12 d-flex align-items-center justify-content-between gap-4 flex-wrap">
            <div className="section-title-3">
              <h2>Happy Customers</h2>
              <p>Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your budject.</p>
            </div>
            <div className="swiper-btn-group">
              <div className="swiper-btn prevbtn2">
                <i className="bi bi-arrow-left" />
              </div>
              <div className="swiper-btn nextbtn2">
                <i className="bi bi-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper {...slider} className="swiper home3-testimonial-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card3">
                    <div className="quate-icon">
                      <img src="assets/img/home-4/left-quote.svg" alt="" />
                    </div>
                    <div className="testimonial-top">
                      <div className="review-left">
                        <img src="assets/img/home-4/google.svg" alt="" />
                      </div>
                      <div className="review-right">
                        <ul className="star">
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                        </ul>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p>“The team is reliable and provides 24/7 support. Its very convinient to work with them. ”</p>
                    </div>
                    <div className="testimonial-btm">
                      <div className="author-area">
                        <div className="author-content">
                          <h4>Mr.Said</h4>
                          <span>CEO At W-Interior</span>
                        </div>
                      </div>
                      {/* <div className="review-date-and-time">
                      <p>May 9, 2023</p> 
                      <span>10.30 PM</span>
                    </div> */}
                    </div>
                  </div>
                  <div className="author-img">
                    <img src="assets/img/clients/avatar.svg" style={{ scale: '2' }} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card3">
                    <div className="quate-icon">
                      <img src="assets/img/home-4/left-quote.svg" alt="" />
                    </div>
                    <div className="testimonial-top">
                      <div className="review-left">
                        <img src="assets/img/home-4/google.svg" alt="" />
                      </div>
                      <div className="review-right">
                        <ul className="star">
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                        </ul>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p>“The team's excellent teamwork and well-equipped talents have resulted in satisfactory outcomes. They provide an all-in-one, one-stop solution and are the best consultant team to support any startup business or anyone who needs value-added solutions.”</p>
                    </div>
                    <div className="testimonial-btm">
                      <div className="author-area">
                        <div className="author-content">
                          <h4>Mr.Abhiram Menon</h4>
                          <span>Co-Founder at Vybes Lifestyle</span>
                        </div>
                      </div>
                      {/* <div className="review-date-and-time">
                      <p>May 9, 2023</p> 
                      <span>10.30 PM</span>
                    </div> */}
                    </div>
                  </div>
                  <div className="author-img">
                    <img src="assets/img/clients/avatar.svg" style={{ scale: '2' }} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card3">
                    <div className="quate-icon">
                      <img src="assets/img/home-4/left-quote.svg" alt="" />
                    </div>
                    <div className="testimonial-top">
                      <div className="review-left">
                        <img src="assets/img/home-4/google.svg" alt="" />
                      </div>
                      <div className="review-right">
                        <ul className="star">
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                        </ul>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p>“Very supportive and Proactive team. I explained the challenges for my dermatoglogy clinic (THEKLINK) and particularly with customer relationships, They came up with very well maintained and user friendly system. ”</p>
                    </div>
                    <div className="testimonial-btm">
                      <div className="author-area">
                        <div className="author-content">
                          <h4>Mrs. Farah</h4>
                          <span>Founder & CEO - THEKLINK</span>
                        </div>
                      </div>
                      {/* <div className="review-date-and-time">
                      <p>May 9, 2023</p> 
                      <span>10.30 PM</span>
                    </div> */}
                    </div>
                  </div>
                  <div className="author-img">
                    <img src="assets/img/clients/avatar.svg" style={{ scale: '2' }} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card3">
                    <div className="quate-icon">
                      <img src="assets/img/home-4/left-quote.svg" alt="" />
                    </div>
                    <div className="testimonial-top">
                      <div className="review-left">
                        <img src="assets/img/home-4/google.svg" alt="" />
                      </div>
                      <div className="review-right">
                        <ul className="star">
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                        </ul>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p>“This team has helped me for what I've been looking for more than 8 years. They built us a mobile app to handle onsite activities by our employees. It is completely helpful and worth every single pany they charged.”</p>
                    </div>
                    <div className="testimonial-btm">
                      <div className="author-area">
                        <div className="author-content">
                          <h4>Mr. Hassan</h4>
                          <span>Co-Founder &CEO - DigitalKey</span>
                        </div>
                      </div>
                      {/* <div className="review-date-and-time">
                      <p>May 9, 2023</p> 
                      <span>10.30 PM</span>
                    </div> */}
                    </div>
                  </div>
                  <div className="author-img">
                    <img src="assets/img/clients/avatar.svg" style={{ scale: '2' }} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card3">
                    <div className="quate-icon">
                      <img src="assets/img/home-4/left-quote.svg" alt="" />
                    </div>
                    <div className="testimonial-top">
                      <div className="review-left">
                        <img src="assets/img/home-4/google.svg" alt="" />
                      </div>
                      <div className="review-right">
                        <ul className="star">
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                          <li><i className="bi bi-star-fill" /></li>
                        </ul>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p>“Working with the team was a great experience. They delivered the work in a short amount of time without compromising quality.”</p>
                    </div>
                    <div className="testimonial-btm">
                      <div className="author-area">
                        <div className="author-content">
                          <h4>Mr. Mohamed Al Yarubi</h4>
                          <span>CEO -Al Yarubi Group</span>
                        </div>
                      </div>
                      {/* <div className="review-date-and-time">
                      <p>May 9, 2023</p> 
                      <span>10.30 PM</span>
                    </div> */}
                    </div>
                  </div>
                  <div className="author-img">
                    <img src="assets/img/clients/avatar.svg" style={{ scale: '2' }} alt="" />
                  </div>
                </SwiperSlide>

              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Testimonial3
