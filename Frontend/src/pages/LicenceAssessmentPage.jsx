import Footer from '@/components/Footer'
import FAQSection from '@/components/Home/FAQSection'
import Hero from '@/components/LicenceAssesment/Hero'
import Main from '@/components/LicenceAssesment/main'
import Navbar from '@/components/Navbar'
import React from 'react'

function LicenceAssessmentPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Main />
            <FAQSection />
            <Footer />
        </>
    )
}

export default LicenceAssessmentPage