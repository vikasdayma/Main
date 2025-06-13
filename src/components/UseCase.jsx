




// import React from 'react';
// import {
//   FaClock,
//   FaComments,
//   FaUserCheck,
//   FaRobot,
//   FaPhoneAlt,
//   FaChartBar,
// } from 'react-icons/fa';

// const useCases = [
//   {
//     title: '24/7 Support',
//     description:
//       'Provide round-the-clock assistance, instantly addressing customer inquiries.',
//     icon: <FaClock size={24} />,
//     color: 'text-blue-400',
//   },
//   {
//     title: 'Lead Generation',
//     description:
//       'Engage visitors, capture leads, and nurture prospects through personalized interactions.',
//     icon: <FaChartBar size={24} />,
//     color: 'text-green-400',
//   },
//   {
//     title: 'Customer Engagement',
//     description:
//       'Interact with customers in real time, delivering personalized experiences.',
//     icon: <FaComments size={24} />,
//     color: 'text-cyan-400',
//   },
//   {
//     title: 'Process Automation',
//     description:
//       'Automate routine tasks, freeing up your team to focus on higher-value activities.',
//     icon: <FaRobot size={24} />,
//     color: 'text-purple-400',
//   },
//   {
//     title: 'Sales Inquiries',
//     description:
//       'Answer product questions and guide prospects through the sales funnel.',
//     icon: <FaPhoneAlt size={24} />,
//     color: 'text-teal-400',
//   },
//   {
//     title: 'Feedback Collection',
//     description:
//       'Gather valuable insights and improve your offerings based on customer feedback.',
//     icon: <FaUserCheck size={24} />,
//     color: 'text-pink-400',
//   },
// ];

// export default function UseCase() {
//   return (
//     <section className="bg-black text-white px-6 py-16">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           How Our AI Chatbots Transform Businesses
//         </h2>
//         <p className="text-gray-400 max-w-2xl mx-auto mb-12">
//           Discover the key benefits of integrating AI-driven chatbots into your
//           business, improve customer satisfaction, streamline processes, and
//           boost your bottom line.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {useCases.map((item, idx) => (
//             <div
//               key={idx}
//               className="relative group rounded-lg overflow-hidden border border-gray-800 bg-[#111111] p-6 shadow-sm transition duration-300"
//             >
//               {/* Background Glow on Hover */}
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-gradient-to-tr from-green-400 via-emerald-500 to-lime-400 z-0
// "></div>

//               {/* Content */}
//               <div className="relative z-10">
//                 <div className={`mb-3 ${item.color}`}>{item.icon}</div>
//                 <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                 <p className="text-gray-400 text-sm">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16">
//           <h3 className="text-xl font-semibold mb-3">Want to see it in action?</h3>
//           <p className="text-gray-400 mb-5">Book a demo today.</p>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition">
//             Book a demo
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';
import React from 'react';
import { FaClock, FaComments, FaUserCheck, FaRobot, FaPhoneAlt, FaChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const useCases = [
  {
    title: '24/7 Support',
    description: 'Provide round-the-clock assistance, instantly addressing customer inquiries.',
    icon: <FaClock size={24} />,
    color: 'text-green-400',
  },
  {
    title: 'Lead Generation',
    description: 'Engage visitors, capture leads, and nurture through personalized interactions.',
    icon: <FaChartBar size={24} />,
    color: 'text-emerald-400',
  },
  {
    title: 'Customer Engagement',
    description: 'Interact with customers in real time, delivering personalized experiences.',
    icon: <FaComments size={24} />,
    color: 'text-lime-400',
  },
  {
    title: 'Process Automation',
    description: 'Automate routine tasks, freeing up your team to focus on higher-value activities.',
    icon: <FaRobot size={24} />,
    color: 'text-teal-400',
  },
  {
    title: 'Sales Inquiries',
    description: 'Answer product questions and guide prospects through the sales funnel.',
    icon: <FaPhoneAlt size={24} />,
    color: 'text-cyan-400',
  },
  {
    title: 'Feedback Collection',
    description: 'Gather valuable insights and improve your offerings based on customer feedback.',
    icon: <FaUserCheck size={24} />,
    color: 'text-pink-400',
  },
];

export default function UseCase(){
  return (
    <section className="bg-[#0B0B0F] text-white px-2 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our AI Chatbots Transform Businesses</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Discover the key benefits of integrating AI-driven chatbots into your business, improve customer satisfaction, streamline processes, and boost your bottom line.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Glowing background effect */}
              <div className="absolute  inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl   z-0 rounded-xl" />

              {/* Card content */}
              <div className="relative z-10 p-6 rounded-xl border border-gray-800 bg-[#0f0f0f] group-hover:shadow-[0_0_25px_rgba(0,255,150,0.3)] transition-all duration-300 transform group-hover:-translate-y-2">
                <div className={`mb-3 ${item.color}`}>{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-3">Want to see it in action?</h3>
          <Link to='/form'>
          <button className="text-white cursor cursor-pointer border border-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-lg">
            Book a demo
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
