import { ArrowRight } from 'lucide-react'
import React from 'react'

function MiniCard({ title, content }) {
    return (
        <div className="bg-white rounded-lg  flex flex-col items-center space-y-3 px-5">
            <div className="flex justify-center items-center">
                <img className='rounded-full w-44' src="/resources1/cardSm.png" alt="cardImg" />
                <div className="">
                    <div className="text-2xl font-bold">{title}</div>
                    <p>{content}</p>
                    <a href="#" className="text-red-500 text-lg hover:font-bold mt-4  w-fit flex items-center">Read Now <p className='mt-[3px]'> <ArrowRight size={20} /></p></a>
                </div>
            </div>

        </div>
    )
}

function StoriesCaseStudy() {
    const miniCardData = [
        {
            title: "Work Permit Extension Saved My Career",
            content: `"As an international student, my work permit was about to expire. Thanks to [Your Company Name], I got my extension on time and continued working!"`
        },
        {
            title: "From Visa Denial to Approval!",
            content: `"I had a visa refusal before reaching out to [Your Company Name], but their expert team guided me through the process, and I finally got my approval. So grateful for their support!"`
        },
        {
            title: "Saved Me from a Scam!",
            content: `"Had my sponsorship canceled by another agency, but helped me find a legal and reliable pathway. Truly a lifesaver!"`
        },
    ]

    return (
        <>
            <div className="py-16 text-center space-y-3">
                <div className="text-5xl font-bold">Success Stories & Case Studies</div>
                <p className='w-[50%] mx-auto opacity-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,</p>
            </div>
            <div className="grid grid-cols-7 ">
                <div className="col-span-3  w-[90%]">
                    <div className="">
                        <img className='rounded-3xl' src="/resources1/cardLg.png" alt="cardImg" />
                    </div>
                    <div className="py-5 px-3 space-y-2">
                        <h1 className='text-3xl font-bold'>From Visa Denial to Approval!</h1>
                        <p className=''>"I had a visa refusal before reaching out to, but their expert team guided me through the process, and I finally got my approval. So grateful for their support!"</p>
                        <a href="#" className="text-red-500 text-lg hover:font-bold mt-4  w-fit flex items-center">Read Now <p className='mt-[3px]'> <ArrowRight size={20} /></p></a>
                    </div>
                </div>
                <div className="col-span-4 space-y-3 flex flex-col items-center justify-center">
                    {miniCardData.map((data, index) => (
                        <MiniCard key={index} title={data.title} content={data.content} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default StoriesCaseStudy