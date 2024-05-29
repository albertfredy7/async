import Head from 'next/head';
import Breadcrumb from '@/components/common/Breadcrumb';
import Layout from '@/components/layout/Layout';
import React from 'react';

const Careers = () => {
    return (
        <>
            <Head>
                <title>Careers and Opportunities | Async Solution LLC</title>
                <meta name="description" content="Stay connected with Async Solution LLC for exciting career opportunities in the tech industry. Check back regularly for updates." />
                <meta name="keywords" content="Careers, Job Openings, Async Solution LLC, Tech Industry, Future Opportunities" />
                <meta name="author" content="Async Solution LLC" />

                {/* Open Graph Tags for Social Sharing */}
                <meta property="og:title" content="Careers and Opportunities | Async Solution LLC" />
                <meta property="og:description" content="Stay connected with Async Solution LLC for exciting career opportunities in the tech industry. Check back regularly for updates." />
                <meta property="og:image" content="https://asyncsolution.com/assets/img/careers-banner.jpg" /> {/* Replace with an image that represents your careers page */}
                <meta property="og:url" content="https://asyncsolution.com/careers" />
                <link rel="canonical" href="https://asyncsolution.com/careers" />

                {/* Structured Data for SEO */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Async Solution LLC",
                    "url": "https://asyncsolution.com/",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "+1-555-555-5555",
                      "contactType": "Customer service",
                      "email": "support@asyncsolution.com",
                      "availability": "Monday-Friday 09:00-17:00",
                      "option": "TollFree"
                    }
                }) }} />
            </Head>
            <Layout>
                <Breadcrumb
                    pageList="Careers"
                    title="Careers and Opportunities "
                    pageName="Careers"
                />
                <div className="container d-flex justify-content-center align-items-center">
                    <h1 className='m-5' style={{margin:'10%'}}>Currently no openings available</h1>
                </div>
            </Layout>
        </>
    );
};

export default Careers;