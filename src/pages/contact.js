import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from 'react-hot-toast';

function Contactpage() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const allFieldsFilled = Object.values(formData).every(field => field.trim()!== "");

    if (!allFieldsFilled) {
      // Show error toast if any field is empty
      toast.error("Please fill all fields.");
      return; // Prevent form submission
    }

    emailjs.sendForm('service_riyzlem', 'template_a46h1bq', formRef.current, {
      publicKey: 'RCPN5EJySzdBPv2Vq',
    })
.then((result) => {
        // Show success toast
        toast.success("Your message has been sent successfully!");
        // Clear form fields
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
    }, (error) => {
        // Show error toast
        toast.error(`Error sending message: ${error.text}`);
    });
  };

  return (
    <Layout>
      <Breadcrumb
        pageList="Contact"
        title="For Any Querry"
        pageName="CONTACT"
      />
      <div className="contact-page-wrap sec-mar">
        <div className="container">
          <div className="row g-lg-4 gy-5">
          <div className="col-lg-6">
              <div className="contact-content">
                <span>CONTACT WITH US</span>
                <h2>LET’S WORK TOGETHER?</h2>
                <p>
                  I have worls-class, flexible support via live chat, email and
                  hone. I guarantee that you’ll be able to have any issue
                  resolved within 24 hours.
                </p>
                <div className="informations">
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="info">
                      <p>
                        Al Wadi Al Kabir, <br /> Muscat, Oman
                      </p>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="info">
                      <a href="tel:+96892020910">+968 9202 0910</a>
                      <a href="tel:+96824818901">+968 2481 8901</a>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="info">
                      <a href="mailto: support@asyncsolution.com">support@asyncsolution.com</a>
                      
                    </div>
                  </div>
                </div>
                <div className="follow-area">
                  <h5 className="blog-widget-title">Follow Us</h5>
                  <p className="para">Follow us on Social Network</p>
                  <div className="blog-widget-body">
                    <ul className="follow-list d-flex flex-row align-items-start gap-4">
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="bx bxl-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/">
                          <i className="bx bxl-pinterest" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-wrap">
                <div className="form-tltle">
                  <h5>Make a Free Consulting</h5>
                </div>
                <div className="contact-form">
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-20">
                        <div className="form-inner">
                          <label>First Name</label>
                          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-md-6 mb-20">
                        <div className="form-inner">
                          <label>Last Name</label>
                          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Company/Organization</label>
                          <input type="text" name="company" value={formData.company} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Email</label>
                          <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Phone</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Message</label>
                          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <button className="primary-btn3" type="submit">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contactpage;