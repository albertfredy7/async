import Home3Team from "@/components/Team/Home3Team";
import About3 from "@/components/about/About3";
import About4 from "@/components/about/About4";
import About5 from "@/components/about/About5";
import Bannder5 from "@/components/bannner/Bannder5";
import Banner3 from "@/components/bannner/Banner3";
import Banner4 from "@/components/bannner/Banner4";
import Banner6 from "@/components/bannner/Banner6";
import Home3Blog from "@/components/blog/Home3Blog";
import Preloader from "@/components/common/Preloader";
import Home3Contact from "@/components/contact/Home3Contact";
import Footer2 from "@/components/footer/Footer2";
import Footer3 from "@/components/footer/Footer3";
import Header from "@/components/header/Header";
import Header3 from "@/components/header/Header3";
import HeaderMain from "@/components/header/HeaderMain";
import Partnar4 from "@/components/partner/Partnar4";
import Partnar6 from "@/components/partner/Partnar6";
import Partner3 from "@/components/partner/Partner3";
import Partner5 from "@/components/partner/Partner5";
import PricingPlan3 from "@/components/pricingplan/PricingPlan3";
import Solution3 from "@/components/solutions/Solution3";
import SuccessStory3 from "@/components/successStorys/SuccessStory3";
import Testimonial3 from "@/components/testimonial/Testimonial3";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";
import AboutPage from "./about";
import Home4Contact from "@/components/contact/Home4Contact";
import TechStack from "@/components/TechStack/TechStack";


const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Async Solutions LLC",
  "url": "https://asyncsolution.com/",
  "logo": "https://asyncsolution.com/assets/img/logo.svg",
  "sameAs": [
    "https://www.facebook.com/people/Async-Solution/100090312594142",
    "https://www.instagram.com/asyncsolution",
    "https://www.linkedin.com/company/asyncsolution"
  ]
};

export default function Home() {
  useBodyClass("home-dark2");

  return (
    <>
      <Head>
        <title>Async Solutions LLC - Home</title>
        <meta name="description" content="Discover innovative IT solutions and services tailored to drive digital transformation. Contact Async Solutions LLC today." />
        <meta name="keywords" content="IT Solutions, Digital Transformation, Async Solution, Custom Software Development, Async, async solution" />
        <meta name="author" content="Async Solution LLC" />
        <meta property="og:title" content="Async Solution LLC" />
        <meta property="og:description" content="Discover innovative IT solutions and services tailored to drive digital transformation. Contact Async Solution LLC today." />
        <meta property="og:image" content="https://asyncsolution.com/assets/img/logo.svg" />
        <meta property="og:url" content="https://asyncsolution.com/" />
        <link rel="canonical" href="https://asyncsolution.com/" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
        <script src="//fw-cdn.com/11660372/4305969.js" async defer></script>
      </Head>

      <HeaderMain />
      <Banner6 />
      <Partnar6 />

      <Solution3 />

      <Partnar4 />

      <About4 />
      <TechStack />
      {/* <SuccessStory3 /> */}
      <Testimonial3 />

      {/* <Home3Team /> */}
      <Home4Contact />

      {/* <Home3Blog /> */}
      <Footer2 />
    </>
  );
}
