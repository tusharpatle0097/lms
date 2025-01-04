import React from 'react'

const RecommendedCourses = () => {

    const courses = [
        {
            image: "https://4kwallpapers.com/images/wallpapers/python-programming-3840x2160-16102.jpg",
            title: "Python ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus mauris quis faucibus pharetra. Aliquam ac feugiat eros, a semper elit. Pellentesque urna magna, aliquam vitae nisi non, congue vestibulum magna."
        },
        {
            image: "https://www.freecodecamp.org/news/content/images/2020/04/jsposter.jpg",
            title: "JavaScript",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus mauris quis faucibus pharetra. Aliquam ac feugiat eros, a semper elit. Pellentesque urna magna, aliquam vitae nisi non, congue vestibulum magna."
        },
        {
            image: "https://cdn.prod.website-files.com/661dc153b706dbb6ca6be504/663b222726c7f9b37d3c6d05_react.png",
            title: "React JS",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus mauris quis faucibus pharetra. Aliquam ac feugiat eros, a semper elit. Pellentesque urna magna, aliquam vitae nisi non, congue vestibulum magna."
        }
    ];
    return (
        <>
            <div className='text-3xl font-medium title-font text-gray-900 my-10 text-center'>
                Recommended Courses
            </div>

            <div className="flex flex-wrap justify-center mx-6" style={{ height: "auto", clear: "both" }}>
                {courses.map((course, index) => (
                    <div className="p-4 md:w-1/3 flex justify-center" key={index}>
                        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg dark:bg-slate-800">
                            <img className="object-contain w-full object-center" src={course.image} alt="img" width="384" height="216" />
                            <div className="px-6 md:my-11 lg:my-0 md:h-72 lg:h-64 lg:py-4 xl:h-52">
                                <span className="tracking-widest text-xs title-font font-medium mb-1 dark:text-gray-400">FREE COURSE</span>
                                <div className="title-font flex text-lg font-medium text-gray-900 mb-3 dark:text-white">{course.title}</div>
                                <p className="text-gray-700 text-base dark:text-gray-400">{course.description}</p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block text-white bg-purple-700 rounded-full px-3 py-2 text-sm font-semibold mr-2 my-2 cursor-pointer hover:bg-purple-600">
                                    Enroll Now
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="p-4 md:w-1/3 flex justify-center" style={{ height: "auto" }}>
                    <div className="google-auto-placed" style={{ width: "100%", height: "auto", clear: "both", textAlign: "center" }}>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecommendedCourses