import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BiMoney } from "react-icons/bi";
import { RiLoginCircleLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PublicNavbar() {
  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">
             
              <div className="flex items-center">
               
                <div className="-ml-2 mr-2 flex md:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                
                <Link to="/" className="flex items-center space-x-2">
                  <BiMoney className="h-8 w-8 text-yellow-400" />
                  <span className="text-white font-bold text-xl">FinTrack</span>
                </Link>

           
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <Link to="/" className="text-white font-medium hover:text-gray-300 transition">Home</Link>
                  
                </div>
              </div>

          
              <div className="flex items-center">
                <Link to="/register">
                  <button className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-400 transition">
                    <FaRegUser className="inline-block mr-1" />
                    Register
                  </button>
                </Link>
                <Link to="/login">
                  <button className="ml-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-400 transition">
                    <RiLoginCircleLine className="inline-block mr-1" />
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>

          7
          <Disclosure.Panel className="md:hidden bg-indigo-700">
            <div className="space-y-1 py-2">
              <Link to="/" className="block text-white py-2 px-4 hover:bg-indigo-800">Home</Link>
               
              <Link to="/register" className="block text-white py-2 px-4 hover:bg-yellow-500">Register</Link>
              <Link to="/login" className="block text-white py-2 px-4 hover:bg-green-500">Login</Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
