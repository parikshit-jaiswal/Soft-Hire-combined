import ContactForm from '@/components/Contact/Form'
import Header from '@/components/Contact/Header'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact
