import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

const FAQSection = () => {

    const sm = useMediaQuery({ query: '(min-width:768px)' })

    const [activeTab, setActiveTab] = useState('All Articles');

    const [activeQuestion, setActiveQuestion] = useState(
        'Do I need to pay to Instapay even when there is no transaction going on in my business?'
    );

    const tabs = [
        { id: 1, name: 'All Articles', isActive: true },
        { id: 2, name: 'UI Design', isActive: false },
        { id: 3, name: 'Interviews', isActive: false },
        { id: 4, name: 'UX Design', isActive: false },
        { id: 5, name: '+6 More', isActive: false },
    ];

    const faqs = [
        {
            question: "What is a Payment Gateway?",
            answer: "A payment gateway is a technology that enables secure online transactions by authorizing and processing payments between merchants and customers. It acts as a bridge between a customer's bank and the merchant's payment processor."
        },
        {
            question: "Do I need to pay to Instapay even when there is no transaction going on in my business?",
            answer: "No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!"
        },
        {
            question: "What platforms does ACME payment gateway support?",
            answer: "ACME payment gateway supports multiple platforms, including websites, mobile apps (iOS and Android), and e-commerce platforms such as Shopify, WooCommerce, and Magento."
        },
        {
            question: "Does ACME provide international payments support?",
            answer: "Yes, ACME payment gateway supports international transactions, allowing businesses to accept payments from customers worldwide in multiple currencies."
        },
        {
            question: "Is there any setup fee or annual maintenance fee that I need to pay regularly?",
            answer: "No, ACME payment gateway does not charge any setup fee or annual maintenance fee. You only pay a transaction fee when a payment is processed."
        }
    ];


    return (
        <>
            {sm ?
                <div className="max-w-[98%] mx-auto py-8 mt-[5rem]">
                    <h1 className="text-4xl font-semibold text-[#353E5C] mb-12 text-center">
                        Frequently asked Questions
                    </h1>

                    {/* Tabs */}
                    <div className="flex gap-3 mb-16 text-center justify-center overflow-x-scroll hide-scroll">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.name)}
                                className={`px-6 py-2 text-nowrap rounded-full text-sm font-medium 
              ${activeTab === tab.name
                                        ? 'bg-[#353E5C] text-white'
                                        : 'bg-white text-[#353E5C] border border-gray-200 hover:border-[#353E5C]'
                                    }`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    {/* FAQ Layout */}
                    <div className="flex gap-8">
                        {/* Left Column - Questions List */}
                        <div className="w-1/2 flex flex-col gap-6">
                            {faqs.map((faq) => (
                                <button
                                    key={faq.question}
                                    className={`flex items-center justify-between p-4 text-left rounded-lg transition-all
                ${activeQuestion === faq.question
                                            ? 'bg-white shadow-lg'
                                            : 'hover:bg-gray-50'
                                        }`}
                                    onClick={() => setActiveQuestion(faq.question)}
                                >
                                    <span className="font-medium text-gray-900">{faq.question}</span>
                                    <ChevronRight
                                        className={`w-5 h-5 text-gray-400 transition-transform
                  ${activeQuestion === faq.question ? 'rotate-90' : ''}`}
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Right Column - Answer Display */}
                        <div className="w-1/2 bg-white rounded-2xl p-8 shadow-lg">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">
                                {activeQuestion}
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                {faqs.find(faq => faq.question === activeQuestion)?.answer}
                            </p>
                        </div>
                    </div>
                </div>
                :
                <div className="max-w-4xl mx-auto p-6">
                    <h1 className="text-3xl font-semibold text-[#2d3748] mb-8 text-center">
                        Frequently asked Questions
                    </h1>

                    {/* Tabs */}
                    <div className="flex pl-[10%] gap-3 mb-16 text-center justify-center overflow-x-scroll hide-scroll w-[100%]">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.name)}
                                className={`px-6 py-2  text-nowrap rounded-full text-sm font-medium 
              ${activeTab === tab.name
                                        ? 'bg-[#353E5C] text-white'
                                        : 'bg-white text-[#353E5C] border border-gray-200 hover:border-[#353E5C]'
                                    }`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    {/* FAQ Items */}
                    <div className="flex flex-col gap-4">
                        {faqs.map((faq) => (
                            <div key={faq.question} className="border rounded-lg overflow-hidden">
                                <button
                                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                                    onClick={() => setActiveQuestion(
                                        activeQuestion === faq.question ? '' : faq.question
                                    )}
                                >
                                    <span className="font-medium text-[#2d3748]">{faq.question}</span>
                                    <span className="ml-4">
                                        {activeQuestion === faq.question ? '−' : '+'}
                                    </span>
                                </button>

                                {activeQuestion === faq.question && (
                                    <div className="p-4 bg-gray-50 border-t">
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>
    );
};

export default FAQSection;

// import React, { useState } from 'react';

// const FAQSection = () => {
//     const [activeTab, setActiveTab] = useState('All Articles');
//     const [activeQuestion, setActiveQuestion] = useState('');

//     const tabs = ['All Articles', 'UI Design', 'Interviews', 'UX Design', '+6 More'];

//     const faqs = [
//         {
//             question: "What is a Payment Gateway?",
//             answer: "A payment gateway is a technology that processes card payments for online and in-person businesses."
//         },
//         {
//             question: "Do I need to pay to Instapay even when there is no transaction going on in my business?",
//             answer: "No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!"
//         },
//         {
//             question: "What platforms does ACME payment gateway support?",
//             answer: "ACME payment gateway supports all major e-commerce platforms and can be integrated with custom solutions."
//         },
//         {
//             question: "Does ACME provide international payments support?",
//             answer: "Yes, ACME supports international payments across multiple currencies and regions."
//         },
//         {
//             question: "Is there any setup fee or annual maintainance fee that I need to pay regularly?",
//             answer: "Contact our sales team for detailed information about our fee structure."
//         }
//     ];

//     return (
//         <div className="max-w-4xl mx-auto p-6">
//             <h1 className="text-3xl font-semibold text-[#2d3748] mb-8 text-center">
//                 Frequently asked Questions
//             </h1>

//             {/* Tabs Section */}
//             <div className="flex flex-wrap gap-3 mb-8 justify-center">
//                 {tabs.map((tab) => (
//                     <button
//                         key={tab}
//                         onClick={() => setActiveTab(tab)}
//                         className={`px-4 py-2 rounded-full text-sm ${activeTab === tab
//                                 ? 'bg-[#2d3748] text-white'
//                                 : 'bg-white text-[#2d3748] border border-[#2d3748]'
//                             }`}
//                     >
//                         {tab}
//                     </button>
//                 ))}
//             </div>

//             {/* FAQ Items */}
//             <div className="flex flex-col gap-4">
//                 {faqs.map((faq) => (
//                     <div key={faq.question} className="border rounded-lg overflow-hidden">
//                         <button
//                             className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
//                             onClick={() => setActiveQuestion(
//                                 activeQuestion === faq.question ? '' : faq.question
//                             )}
//                         >
//                             <span className="font-medium text-[#2d3748]">{faq.question}</span>
//                             <span className="ml-4">
//                                 {activeQuestion === faq.question ? '−' : '+'}
//                             </span>
//                         </button>

//                         {activeQuestion === faq.question && (
//                             <div className="p-4 bg-gray-50 border-t">
//                                 <p className="text-gray-600">{faq.answer}</p>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FAQSection;