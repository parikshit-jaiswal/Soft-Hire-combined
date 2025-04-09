import { ArrowRight, Calendar, Clock } from 'lucide-react'
import React from 'react'

function BlogCard({ Blogdata }) {
    return (
        <div className="rounded-lg p-6 flex-shrink-0 w-80 md:w-auto md:flex-1 flex flex-col  snap-center space-y-4">
            <img
                src={Blogdata.img}
                alt="Office workspace"
                className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <div className="text-2xl font-bold">{Blogdata.data}</div>
            <div className="flex gap-12 ">
                <div className="flex justify-center items-center gap-2 "><Calendar size={20} strokeWidth={2.5} /> <p>March 10,2024</p></div>
                <div className="flex justify-center items-center gap-2"><Clock size={20} strokeWidth={2.5} /><p>8 min read</p></div>
            </div>
            <a href="#" className="text-red-500  text-lg hover:font-bold mt-4  w-fit flex items-center">Read Now <p className='mt-[3px]'> <ArrowRight size={20} /></p></a>
        </div>
    )
}

function BlogSection() {

    const Blogdata = [
        {
            img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
            data: "The Future of International Tech Hiring in 2025",
            date: "March 10,2024",
            time: "8 min read",
        },
        {
            img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
            data: "The Future of International Tech Hiring in 2025",
            date: "March 10,2024",
            time: "8 min read",
        },
        {
            img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
            data: "The Future of International Tech Hiring in 2025",
            date: "March 10,2024",
            time: "8 min read",
        },
        {
            img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
            data: "The Future of International Tech Hiring in 2025",
            date: "March 10,2024",
            time: "8 min read",
        },
        {
            img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
            data: "The Future of International Tech Hiring in 2025",
            date: "March 10,2024",
            time: "8 min read",
        },
        {
            img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80",
            data: "The Future of International Tech Hiring in 2025",
            date: "March 10,2024",
            time: "8 min read",
        },

    ]

    return (
        <div className="bg-[#E9EEF4] mt-16 px-[7%] pb-12">
            <div className="py-16 text-center space-y-3">
                <div className="text-5xl font-bold">Latest Blogs</div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {Blogdata.map((data, index) => (
                    <div key={index} className="col-span-1">
                        <BlogCard Blogdata={data} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogSection