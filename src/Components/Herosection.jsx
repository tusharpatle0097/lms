import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const Herosection = () => {
    return (
        <>

            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
                <div>
                    <div className='mt-7 py-3 pl-9'>
                        <h2 className='text-2xl font-semibold text-gray-800 md:text-3xl '>Welcome to
                            <span className='text-purple-700 mb-[50px] pl-3 dark:text-purple-600'>Learning Management System</span></h2>

                        <span className=' text-xl font-semibold text-gray-800 md:text-2xl '>Learn</span>
                        <TypeAnimation
                            sequence={[
                                ' C',
                                1000,
                                ' C++',
                                1000,
                                ' Java',
                                1000,
                                ' React.Js',
                                1000
                                
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block' }}
                            className='pl-3 text-xl text-purple-700 font-semibold  md:text-2xl dark:text-white'
                            repeat={Infinity}
                        />
                        <br />
                        <span className='mt-2 text-sm text-gray-500 md:text-base dark:text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, non. Ex optio nemo eius nam aliquid facere id veritatis officiis, vero qui corporis velit atque unde? Placeat vitae blanditiis mollitia!</span>
                        <div className="flex space-x-4 mt-6">
                            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
                                Get Started
                            </button>

                            <button className="bg-white border-2 border-purple-500 text-purple-500 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-purple-500 hover:text-white hover:shadow-xl transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center pt-9">
                    <img
                        className="w-[80%]"
                        src="https://i.pinimg.com/originals/2a/23/73/2a23730fb0133701905f716dd21eead2.jpg"
                        alt="Decorative"
                    />
                </div>

            </div>
        </>
    )
}

export default Herosection