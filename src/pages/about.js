import About4 from "@/components/about/About4";
import Home3Team from "../components/Team/Home3Team";
import About3 from "../components/about/About3";
import Home3Blog from "../components/blog/Home3Blog";
import Choose6 from "../components/choose/Choose6";
import Breadcrumb from "../components/common/Breadcrumb";
import Home3Contact from "../components/contact/Home3Contact";
import Feature4 from "../components/features/Feature4";
import Layout from "../components/layout/Layout";
import Partnar4 from "../components/partner/Partnar4";
import Testimonial3 from "../components/testimonial/Testimonial3";
import About5 from "@/components/about/About5";
import Partnar6 from "@/components/partner/Partnar6";
import Home4Contact from "@/components/contact/Home4Contact";
import TechStack from "@/components/TechStack/TechStack";

function AboutPage() {
  return (
    <Layout>
      <Breadcrumb
        pageList="About"
        title="Get To Know About Async Solutions LLC"
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
