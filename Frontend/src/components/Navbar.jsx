import React, { useState, useEffect } from 'react';
import DropdownMenu from './miniComponents/DropdownMenu';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`h-16 lg:h-16 w-full flex justify-between items-center px-5 md:px-[5%] bg-white z-50 fixed top-0 transition-all duration-300 box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;`}>
                <p className="logo text-2xl lg:text-2xl font-bold cursor-pointer">
                    <img className='h-10 lg:h-12' src="/softHireLogo.png" alt="" />
                </p>

                <div className="hidden lg:flex navOption items-center font-semibold gap-10">
                    <Link to="/" className="hover:text-[#326789] transition-colors duration-200 cursor-pointer">Home</Link >
                    <p><DropdownMenu title="Platform" subheading={[{ name: "Test1", route: "/" }, { name: "Test2", route: "/" }]} /></p>
                    <p className="hover:text-[#326789] transition-colors duration-200 cursor-pointer">Pricing</p>
                    <p><DropdownMenu title="Resources" subheading={[{ name: "Resource-1", route: "/r1" }, { name: "Resource-2", route: "/" }]} /></p>
                    <p className="hover:text-[#326789] transition-colors duration-200 cursor-pointer">About</p>
                    <p className="hover:text-[#326789] transition-colors duration-200 cursor-pointer">Contact Us</p>
                </div>

                <div className="hidden lg:flex navRight gap-5 items-center">
                    <p><DropdownMenu title="Login" /></p>
                    <Button variant="round" size="round">Request a Demo</Button>
                </div>

                <div className="lg:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="p-2 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X size={40} className="text-[#326789] transition-transform duration-300" />
                        ) : (
                            <Menu size={40} className="transition-transform duration-300" />
                        )}
                    </button>
                </div>
            </div>

            <div
                className={`fixed top-16 left-0 right-0 bg-white shadow-lg z-40 transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                style={{
                    transformOrigin: 'top',
                    boxShadow: isOpen ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none'
                }}
            >
                <div className="flex flex-col p-5 space-y-5">
                    <Link to="/" className="py-3 px-4 hover:bg-gray-100 transition-colors duration-200 rounded-md cursor-pointer font-semibold">Home</Link >

                    <div className="py-3 px-4 hover:bg-gray-100 transition-colors duration-200 rounded-md">
                        <DropdownMenu title="Platform" subheading={[{ name: "Test1", route: "/" }, { name: "Test2", route: "/" }]} />
                    </div>
                    <p className="py-3 px-4 hover:bg-gray-100 transition-colors duration-200 rounded-md cursor-pointer font-semibold">Pricing</p>
                    <div className="py-3 px-4 hover:bg-gray-100 transition-colors duration-200 rounded-md">
                        <DropdownMenu title="Resources" subheading={[{ name: "Resource-1", route: "/r1" }, { name: "Resource-2", route: "/" }]} />
                    </div>
                    <p className="py-3 px-4 hover:bg-gray-100 transition-colors duration-200 rounded-md cursor-pointer font-semibold">About</p>
                    <p className="py-3 px-4 hover:bg-gray-100 transition-colors duration-200 rounded-md cursor-pointer font-semibold">Contact Us</p>

                    <div className="border-t border-gray-200 pt-5">
                        <div className="py-3 px-4 hover:bg-gray-100 transition-colors duration-200 rounded-md">
                            <DropdownMenu title="Login" />
                        </div>
                        <div className="px-4 pt-3">
                            <Button variant="round" size="round" className="w-full">Request a Demo</Button>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50  z-30 lg:hidden"
                    onClick={toggleMenu}
                    aria-hidden="true"
                />
            )}
        </>
    );
}

export default Navbar;