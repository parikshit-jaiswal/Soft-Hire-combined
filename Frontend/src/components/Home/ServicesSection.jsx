
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button } from '../ui/button';

function ServicesSection() {

    const sm = useMediaQuery({ query: '(max-width: 639px)' });

    const [activeTab, setActiveTab] = useState("For Organizations");

    const tabs = [
        { id: 1, name: "For Organizations" },
        { id: 2, name: "For Individuals" },
        { id: 3, name: "For Universities" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#326789] text-white">
            {/* Header Section */}
            <div className="flex flex-col items-center py-12 px-4">
                <h1 className=" text-3xl lg:text-5xl text-center font-bold mb-6">Key Services & Features</h1>
                <p className="text-gray-300 text-center max-w-2xl">
                    Whether you're hiring top talent, exploring new career paths, or supporting student placements, our platform streamlines the process with services
                </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mb-12 p-5">
                {sm ? <div className="w-full bg-white flex justify-center py-3 rounded-2xl">
                    <div className="sm:flex w-fit bg-white rounded-lg ">
                        {tabs.map((tab) => (
                            <p onClick={() => setActiveTab(tab.name)} className={`${activeTab == tab.name ? `bg-[#E65C4F]` : `text-black`} h-12 flex items-center p-7 rounded-lg text-sm font-bold  cursor-pointer transition-all`}>{tab.name}</p>
                        ))}
                    </div>
                </div>
                    :
                    <div>
                        <div className="flex w-fit bg-white rounded-lg ">
                            {tabs.map((tab) => (
                                <p onClick={() => setActiveTab(tab.name)} className={`${activeTab == tab.name ? `bg-[#E65C4F]` : `text-black`} h-12 flex items-center p-7 rounded-lg text-sm font-bold  cursor-pointer transition-all`}>{tab.name}</p>
                            ))}
                        </div>
                    </div>}

            </div>

            {/* Content Card */}
            <div className="flex flex-col items-center px-4 mb-[6rem]">
                <div className="flex flex-col md:flex-row max-w-4xl w-full bg-white text-gray-800 rounded-2xl shadow-lg overflow-hidden">
                    {/* Image Section */}
                    <div className="flex w-full md:w-1/2 p-2">
                        <img
                            src="https://thumbs.dreamstime.com/b/buildings-permit-concept-residential-building-project-wooden-stamp-261360046.jpg"
                            alt="Sponsor License"
                            className="w-full h-auto object-cover rounded-2xl"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col p-6 w-full md:w-1/2 gap-5 justify-center">
                        <h2 className="text-2xl font-extrabold">Sponsor License</h2>
                        <p className="text-gray-600 text-sm">
                            Easily obtain and manage your Sponsor License to hire international talent. Our platform simplifies compliance, documentation, and application tracking, ensuring a seamless process for your organization.
                        </p>
                        <div className=" w-8">
                            <Button variant="hero1">Learn More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ServicesSection;