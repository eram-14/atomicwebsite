import React from 'react'
import BlogImage from '../components/BlogImage/BlogImage'
import CoverCommon from '../components/CoverCommon/CoverCommon'

const Blog = () => {
    return (
        <>
            <CoverCommon heading={'blog'} subheading={' Thoughts and ideas shared to web community'} coln={'col-md-8'} />
            <BlogImage />
        </>
    )
}

export default Blog
