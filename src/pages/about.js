import Head from 'next/head';
import Layout from '../components/layout/Layout';
import About3 from '../components/about/About3';
import Choose6 from '../components/choose/Choose6';
import Breadcrumb from '../components/common/Breadcrumb';
import Home3Contact from '../components/contact/Home3Contact';
import Feature4 from '../components/features/Feature4';
import Partnar4 from '../components/partner/Partnar4';
import Testimonial3 from '../components/testimonial/Testimonial3';
import TechStack from '@/components/TechStack/TechStack';
import Home4Contact from '@/components/contact/Home4Contact';
import About5 from '@/components/about/About5';
import Partnar6 from '@/components/partner/Partnar6';

function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About Async Solution LLC</title>
        <meta name="description" content="Explore the journey of Async Solution LLC, a leading IT provider offering innovative solutions and services." />
        <meta name="keywords" content="IT Solutions, Digital Transformation, Async Solution, Custom Software Development, Async, async solution" />
        <meta name="author" content="Async Solution LLC" />
        <meta property="og:title" content="About Async Solution LLC" />
        <meta property="og:description" content="Explore the journey of Async Solution LLC, a leading IT provider offering innovative solutions and services." />
        <meta property="og:image" content="https://asyncsolution.com/assets/img/logo.svg" /> 
        <meta property="og:url" content="https://asyncsolution.com/about" />
        <link rel="canonical" href="https://asyncsolution.com/about" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Async Solution LLC",
          "url": "https://asyncsolution.com/",
          "logo": "https://asyncsolution.com/assets/img/logo.svg",
          "sameAs": [
            "https://www.facebook.com/people/Async-Solution/100090312594142",
            "https://www.instagram.com/asyncsolution",
            "https://www.linkedin.com/company/asyncsolution"
          ]
        }) }} />
      </Head>
      <Breadcrumb
        pageList="About"
        title="Get To Know About Async Solution LLC"
        pageName="ABOUT"
      />
      <About3 />
      <Choose6 />
      {/* <Feature4 /> */}
      <Partnar4 />
      <Partnar6 />
      <Testimonial3 />
      <TechStack />
      <Home4Contact />
    </Layout>
  );
}

export default AboutPage;