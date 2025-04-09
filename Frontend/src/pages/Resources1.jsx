import Footer from '@/components/Footer'
import FAQSection from '@/components/Home/FAQSection'
import Navbar from '@/components/Navbar'
import BlogSection from '@/components/Resources1/BlogSection'
import EventsSection from '@/components/Resources1/EventsSection'
import Hero from '@/components/Resources1/Hero'
import StoriesCaseStudy from '@/components/Resources1/StoriesCaseStudy'
import React from 'react'

function Resources1() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-[7%]">
        <EventsSection />
      </div>
      <div className="">
        <BlogSection />
      </div>
      <div className="px-[7%]">
        <StoriesCaseStudy />
        <FAQSection />
      </div >
      <Footer />
    </>
  )
}

export default Resources1