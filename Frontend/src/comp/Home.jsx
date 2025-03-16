import React from "react";
import { Link } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaSignInAlt,
  FaList,
  FaChartPie,
  FaQuoteLeft,
} from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaFilter } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <>
      
      <div className="bg-gradient-to-br from-[#6A11CB] to-[#2575FC] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-extrabold leading-tight drop-shadow-md">
            Smarter Expense Tracking for You
          </h1>
          <p className="mt-6 text-xl text-gray-200">
            Gain full control of your finances with insightful reports and AI-powered analytics.
          </p>
          <Link to="/register">
            <button className="mt-8 px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-indigo-100 transition duration-300 transform hover:scale-105">
              Get Started for Free
            </button>
          </Link>
        </div>
      </div>

   
      <div className="py-20 px-6 bg-gradient-to-r from-gray-100 to-gray-200">
        <h2 className="text-4xl font-bold text-center text-gray-800">Why Choose Us?</h2>
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <FaMoneyBillWave className="text-4xl text-indigo-500" />, text: "Expense Tracking" },
            { icon: <FaFilter className="text-4xl text-green-500" />, text: "Advanced Filtering" },
            { icon: <IoIosStats className="text-4xl text-yellow-500" />, text: "Smart Insights" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
              <div className="p-5 bg-indigo-100 rounded-full">{item.icon}</div>
              <p className="mt-4 text-lg font-semibold text-gray-800">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-24 px-6 bg-gradient-to-br from-[#FF6B6B] to-[#FFD166]">
        <h2 className="text-4xl font-bold text-center text-white">How It Works</h2>
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: <FaSignInAlt className="text-3xl text-white" />, title: "Sign Up", description: "Create an account and start tracking." },
            { icon: <FaList className="text-3xl text-white" />, title: "Add Transactions", description: "Easily add income & expenses." },
            { icon: <FaChartPie className="text-3xl text-white" />, title: "View Reports", description: "Analyze detailed spending insights." },
          ].map((step, index) => (
            <div key={index} className="text-center bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
              <div className="p-4 bg-indigo-500 text-white rounded-full inline-block">
                {step.icon}
              </div>
              <h3 className="mt-4 font-bold text-xl text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 py-24 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">What Our Users Say</h2>
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { quote: "This app changed my financial life! Super easy and efficient.", name: "Leo Messi" },
            { quote: "Managing my money has never been this simple! Highly recommend.", name: "Cristiano Ronaldo" },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
              <FaQuoteLeft className="text-2xl text-gray-400" />
              <p className="mt-4 text-lg text-gray-700 italic">{testimonial.quote}</p>
              <p className="mt-4 font-bold text-gray-900">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

    
      <div className="bg-gradient-to-r from-[#6A11CB] to-[#2575FC] text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold">
          Take Control of Your Finances Today!
        </h2>
        <p className="mt-4 text-lg">Join thousands of users and start tracking your expenses effortlessly.</p>
        <Link to="/register">
          <button className="mt-8 px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-indigo-100 transition duration-300 transform hover:scale-105">
            Sign Up Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default HeroSection;
