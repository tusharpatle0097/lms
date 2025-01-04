import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const menuBar = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap  p-6">
                <div className="flex items-center gap-3 flex-shrink-0 text-white mr-6">
                    <span className='font-semibold text-xl text-blue-600'>&lt;/&gt;</span>
                    <span className="font-semibold text-xl tracking-tight text-blue-600">LMS</span>
                </div>
                <div className="block lg:hidden">
                    <button onClick={menuBar} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 ">
                        <div>{menuOpen ? <RxCross1 /> : <GiHamburgerMenu />}</div>
                    </button>
                </div>
                <div className={`w-full block flex-grow lg:flex lg:items-center  lg:w-auto lg:text-right ${menuOpen ? 'block' : 'hidden'}`}>
                    <div className="text-sm lg:flex-grow ">
                        <a href="#responsive-header" className="block  text-[16px] mt-4 lg:inline-block lg:mt-0 text-black hover:text-purple-700 mr-6">
                            Home
                        </a>
                        <a href="#responsive-header" className="block text-[16px] mt-4 lg:inline-block lg:mt-0 text-black hover:text-purple-700 mr-6">
                            Courses
                        </a>
                        <a href="#responsive-header" className="block text-[16px] mt-4 lg:inline-block lg:mt-0 text-black hover:text-purple-700 mr-6">
                            Tutorial
                        </a>
                        <a href="#responsive-header" className="block text-[16px] mt-4 lg:inline-block lg:mt-0 text-black hover:text-purple-700 mr-6">
                            Blog
                        </a>
                        <a href="#responsive-header" className="block text-[16px] mt-4 lg:inline-block lg:mt-0 text-black hover:text-purple-700 mr-6">
                            Note
                        </a>
                        <a href="#responsive-header" className="block text-[16px] mt-4 lg:inline-block lg:mt-0 text-black hover:text-purple-700 mr-6">
                            Contact
                        </a>
                        
                        <div className="block text-[16px] mt-4 lg:inline-block lg:mt-0  mr-6">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                            >
                                Login
                            </button>
                        </div>

                    </div>

                </div>
            </nav>
            <hr className='dark:border-gray-500' />
            <div className="max-h-[6vh] min-h-[40px] flex items-center ml-3 mr-3 md:ml-10 md:mr-10 my-1">
                <span>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        className="text-purple-700 text-xl cursor-pointer dark:text-purple-300"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
                    </svg>
                </span>
                <ul className="space-x-7 m-auto text-purple-700 font-semibold hidden md:flex items-center">
                    <li className="cursor-pointer text-[15px] hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300">
                        <a href="/tutorial/html-home/">HTML</a>
                    </li>
                    <li className="cursor-pointer text-[15px] hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300">
                        <a href="/tutorial/css-home/">CSS</a>
                    </li>
                    <li className="cursor-pointer text-[15px] hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300">
                        <a href="/tutorial/js/">JS</a>
                    </li>
                    <li className="cursor-pointer text-[15px] hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300">
                        <a href="/tutorial/c/">C</a>
                    </li>
                    <li className="cursor-pointer text-[15px] hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300">
                        <a href="/tutorial/cplusplus/">C++</a>
                    </li>
                    <li className="cursor-pointer text-[15px] hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300">
                        <a href="/tutorial/java/">JAVA</a>
                    </li>
                    <li className="cursor-pointer text-[15px] hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300">
                        <a href="/tutorial/python/">PYTHON</a>
                    </li>
                    <li className="cursor-pointer text-[15px] hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300">
                        <a href="/tutorial/php/">PHP</a>
                    </li>
                    <li className="cursor-pointer text-[15px] hover:border-b-2 hover:border-purple-700 active:border-b-4 dark:text-purple-300">
                        <a href="/tutorial/react-home/">REACT JS</a>
                    </li>
                </ul>
                <input
                    id="search"
                    className="hidden right-10 md:right-10 absolute w-48 md:w-60 h-8 bg-white rounded border-2 border-purple-500 focus:border-purple-700 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-500 dark:text-gray-200"
                    placeholder="Search..."
                />
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    className="text-purple-700 dark:text-purple-300 cursor-pointer text-2xl absolute right-3 md:right-12"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                </svg>
            </div>
            <hr className='dark:border-gray-500' />

        </>
    )
}

export default Navbar