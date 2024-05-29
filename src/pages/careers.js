import Breadcrumb from '@/components/common/Breadcrumb'
import Layout from '@/components/layout/Layout'
import React from 'react'

const careers = () => {
    return (
        <Layout>
            <Breadcrumb
                pageList="Careers"
                title="Careers and Opportunities "
                pageName="Careers"
            />
            <div className="container d-flex justify-content-center align-items-center">

                <h1 className='m-5' style={{margin:'10%'}}>Currently no openings available</h1>
            </div>
        </Layout >
    )
}

export default careers