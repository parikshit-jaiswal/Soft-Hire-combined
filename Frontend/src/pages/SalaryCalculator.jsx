import React, { useState, useEffect } from 'react';

export default function SalaryCalculator() {
    const [role, setRole] = useState('2141 - Web design professionals');
    const [isInUK, setIsInUK] = useState('Yes');
    const [visaType, setVisaType] = useState('Student');
    const [isYounger, setIsYounger] = useState('Yes');
    const [annualSalary, setAnnualSalary] = useState('£30,960');
    const [hourlySalary, setHourlySalary] = useState('15.88');
    const [jobDescription, setJobDescription] = useState(
        'Liaises with internal/external client in order to define the requirements for the specific application. Prepares specifications, update, etc. Designs web pages and applications including graphics, animation and functionality to maximize visual effectiveness and facilitate appropriate access. Designs web interfaces for relational database systems.'
    );

    // In a real application, you might calculate these values based on selections
    useEffect(() => {
        // Example calculation logic could go here
        // This would update the salary values based on selections
    }, [role, isInUK, visaType, isYounger]);

    const handleReset = () => {
        setRole('2141 - Web design professionals');
        setIsInUK('Yes');
        setVisaType('Student');
        setIsYounger('Yes');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-md w-full max-w-lg p-6">
                <h1 className="text-xl font-bold text-center mb-6">Skilled Worker Minimum Salary Calculator</h1>

                {/* Role Selection */}
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <label className="font-medium">Role</label>
                        <span className="text-xs text-gray-500">Required</span>
                    </div>
                    <div className="relative">
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded bg-white appearance-none pr-8"
                        >
                            <option>2141 - Web design professionals</option>
                            <option>2136 - Programmers and software development professionals</option>
                            <option>2137 - Web development professionals</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Job Description */}
                <div className="mb-4">
                    <div className="bg-gray-100 p-3 rounded text-sm">
                        <p className="font-medium mb-1">Home Office Job Description:</p>
                        <p>{jobDescription}</p>
                    </div>
                </div>

                {/* UK Status */}
                <div className="mb-4">
                    <p className="font-medium mb-2">Is this individual currently in the UK?</p>
                    <div className="flex gap-2">
                        <button
                            className={`px-4 py-1 rounded-full text-sm ${isInUK === 'Yes' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                            onClick={() => setIsInUK('Yes')}
                        >
                            Yes
                        </button>
                        <button
                            className={`px-4 py-1 rounded-full text-sm ${isInUK === 'No' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                            onClick={() => setIsInUK('No')}
                        >
                            No
                        </button>
                    </div>
                </div>

                {/* Visa Type */}
                <div className="mb-4">
                    <p className="font-medium mb-2">What type of VISA is the individual currently on?</p>
                    <div className="flex flex-wrap gap-2">
                        {['Student', 'Dependent', 'Skilled', 'Graduate', 'Other'].map(type => (
                            <button
                                key={type}
                                className={`px-4 py-1 rounded-full text-sm ${visaType === type ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                                onClick={() => setVisaType(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Age Status */}
                <div className="mb-4">
                    <p className="font-medium mb-2">Is this individual younger than 26 years old?</p>
                    <div className="flex gap-2">
                        <button
                            className={`px-4 py-1 rounded-full text-sm ${isYounger === 'Yes' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                            onClick={() => setIsYounger('Yes')}
                        >
                            Yes
                        </button>
                        <button
                            className={`px-4 py-1 rounded-full text-sm ${isYounger === 'No' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                            onClick={() => setIsYounger('No')}
                        >
                            No
                        </button>
                    </div>
                </div>

                {/* Salary Results */}
                <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-blue-100 p-3 rounded">
                        <p className="text-sm text-blue-600 mb-1">Minimum Salary (Annual)</p>
                        <p className="text-lg font-bold">{annualSalary}</p>
                    </div>
                    <div className="flex-1 bg-blue-100 p-3 rounded">
                        <p className="text-sm text-blue-600 mb-1">Minimum Salary (Hourly)</p>
                        <p className="text-lg font-bold">£{hourlySalary}</p>
                    </div>
                </div>

                {/* Information */}
                <div className="mb-4">
                    <p className="text-xs text-gray-700">
                        The UK's skilled worker visa system offers flexibility in sponsorship based
                        on salary levels and entitles qualifying individuals and sponsors to benefit
                        at a lower minimum salary for up to 4 years if they are on a student visa
                        or under 26 years old. For longer sponsorships, the standard going rate
                        must be paid. This provision aims to support younger workers and those
                        starting their careers while still ensuring fair compensation.
                    </p>
                </div>

                {/* Reset Button */}
                <button
                    onClick={handleReset}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}