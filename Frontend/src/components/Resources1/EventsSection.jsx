import { ArrowRight, ChevronRight } from 'lucide-react'
import React from 'react'

function EventCard({ }) {
    return (
        <div className="rounded-lg p-6 flex-shrink-0 w-80 md:w-auto md:flex-1 flex flex-col  snap-center hover:shadow-lg">
            <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80"
                alt="Office workspace"
                className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">The Future of International Tech Hiring in 2025</h2>
            <p className="text-gray-600 mt-2">
                Discover emerging trends in global software recruitment, visa regulations, and remote hiring strategies.
            </p>
            <a href="#" className="text-red-500 text-lg hover:font-bold mt-4  w-fit flex items-center">Read Now <p className='mt-[3px]'> <ArrowRight size={20} /></p></a>
        </div>
    )
}

function EventsSection() {
    return (
        <>
            <div className="py-16 text-center space-y-3">
                <div className="text-5xl font-bold">Upcoming Events</div>
                <p className='w-[50%] mx-auto opacity-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((data, index) => (
                    <div key={index} className="col-span-1">
                        <EventCard />
                    </div>
                ))}
            </div>
        </>
    )
}

export default EventsSection