import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { BiMoney } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { logoutAction } from "../store/slice/userSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PrivateNavbar() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutAction());
    localStorage.removeItem("userInfo");
  };

  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">
              
              <div className="flex items-center">
                
                <div className="mr-2 md:hidden">
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

               
                <div className="hidden md:flex md:ml-6 md:space-x-6">
                  <Link to="/dashboard" className="text-white font-medium hover:text-gray-300 transition">
                    Dashboard
                  </Link>
                  <Link to="/add-transaction" className="text-white font-medium hover:text-gray-300 transition">
                    Add Transaction
                  </Link>
                  <Link to="/add-category" className="text-white font-medium hover:text-gray-300 transition">
                    Add Category
                  </Link>
                  
                  <Link to="/categories" className="text-white font-medium hover:text-gray-300 transition">
                    Categories
                  </Link>

                  <Link to="/profile" className="text-white font-medium hover:text-gray-300 transition">
                    Profile
                  </Link>

                </div>
              </div>

        
              <div className="flex items-center">
                <button
                  onClick={logoutHandler}
                  className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-500 transition flex items-center"
                >
                  <IoLogOutOutline className="mr-2 h-5 w-5" />
                  Logout
                </button>
              </div>
            </div>
          </div>

          
          <Disclosure.Panel className="md:hidden bg-indigo-700">
            <div className="space-y-1 py-2">
              <Link to="/dashboard" className="block text-white py-2 px-4 hover:bg-indigo-800">
                Dashboard
              </Link>
              <Link to="/add-transaction" className="block text-white py-2 px-4 hover:bg-indigo-800">
                Add Transaction
              </Link>
              <Link to="/categories" className="block text-white py-2 px-4 hover:bg-indigo-800">
                Categories
              </Link>
              <Link to="/profile" className="block text-white py-2 px-4 hover:bg-indigo-800">
                Profile
              </Link>
              <button
                onClick={logoutHandler}
                className="w-full text-left block text-white py-2 px-4 hover:bg-red-500"
              >
                Logout
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
