import React from 'react'
import ReactMarkdown from 'react-markdown';


const BlogContent = () => {

    
  const blog = {
    "id" : 1,
    "title" : "Master Kubernetes",
    "desc" : "Series on how to master K8S",
    "coverImg" : "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/9cXMJHaViTM/upload/76710bdc5eefb462668ccbf1b5bd763a.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    "content" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quisquam harum voluptatem voluptate rem dolor voluptatibus magni, a beatae corporis, odio corrupti eligendi ipsam molestias doloremque voluptas facilis non alias.",

    "authorName" : "Akshat Sharma",
    "authorImg" : "https://media.licdn.com/dms/image/D4D03AQHVNT1HYvI75w/profile-displayphoto-shrink_200_200/0/1691404850102?e=1706140800&v=beta&t=Hu2j5_VG6fUenVIZNJz_6Nt2Nmh-kcXns9m1UOKkYrQ",
    "authDesc1" : "4th year Undergrad in Computer Science Engineering",
    "authDesc2" : "Kubernetes | Docker | AWS / Azure | Linux",
    "authDesc3" : "Web Development | Video Editing",
    "authDesc4" : "Currently working on Terraform and React"
  }

  return (

    <div className='w-full pb-10 bg-[#f9f9f9]'>
        <div className="max-w-[1240px] mx-auto">
            <div className="grid min-[220px]:grid-cols-1 ss:grid-cols-1 lg:grid-cols-3 sm:grid-cols-3 sm:gap-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black ">
                {/* 2 cols for content */}
                <div className="col-span-2 gap-x-8 gap-y-8">
                    <img src={blog.coverImg} alt="Cover Img" className='w-auto h-auto' />
                    <h1 className="font-bold text-2xl my-1 pt-5">{blog.title}</h1> 
                    <div className="pt-5 min-[220px]:pb-10 max-[768px]:pb-10">
                        <ReactMarkdown>{blog.content}</ReactMarkdown>
                    </div>
                </div>

                {/* last col for desc */}
                <div className="w-full bg-white rounded-xl overflow-scroll drop-shadow-md py-5 h-[500px]">
                    <div>
                        <img src={blog.authorImg} alt="" className="p-2 w-32 h-32 rounded-full mx-auto" />
                        <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">{blog.authorName}</h1>
                        <p className="font-medium text-center text-gray-900 pt-5">{blog.authDesc1}</p>
                        <p className="font-medium text-center text-gray-900 pt-3">{blog.authDesc2}</p>
                        <p className="font-medium text-center text-gray-900 pt-3">{blog.authDesc3}</p>
                        <p className="font-medium text-center text-gray-900 pt-3">{blog.authDesc4}</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default BlogContent