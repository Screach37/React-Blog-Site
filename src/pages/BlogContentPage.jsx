import React from 'react'
import {Navbar, Footer, BlogContent} from '../components'

function BlogContentPage({blogs}) {
  return (
    <div>        
        <Navbar />
        <BlogContent />
        <Footer />
    </div>
  )
}

export default BlogContentPage;