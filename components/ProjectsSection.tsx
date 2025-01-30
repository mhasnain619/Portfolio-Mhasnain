import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
    {
    name: "BMW.com | The international BMW Website",
    description: "A sleek replica of the BMW website built with React, featuring user authentication and modern web development practices.",
    image: "/bmw.jpg",
    github: "https://github.com/mhasnain619/bmw-new-version",
    link: "https://bmw-new-version.vercel.app/",
  },
    {
    name: "ExploreEase | Welcome to the ExploreEase",
    description: "This is the central hub where you can access and manage all key aspects of your application. Navigate through different sections such as Users, Products, Profile, and Contact using the sidebar menu. The dashboard provides a user-friendly interface for quick access to essential data, analytics, and management tools. Get real-time insights and efficiently handle tasks with just a few clicks.",
    image: "/exploreEase.jpg",
    github: "https://github.com/mhasnain619/Nested-Routing-App",
    link: "https://nested-routing-app.vercel.app/",
  },
    {
    name: "Products | Products Details",
    description: "Discover a modern, high-performance web application meticulously crafted with React Bootstrap to deliver a seamless shopping experience across 20+ diverse products. Designed with industry best practices, this platform combines sleek aesthetics, robust functionality, and optimal performance to engage users and drive conversions.",
    image: "/product.jpg",
    github: "https://github.com/mhasnain619/productDetail",
    link: "https://product-detail-ten.vercel.app/",
  },
   {
    name: "GitHub User Finder App",
    description: "This is a simple and efficient web application that allows users to search for GitHub profiles and view detailed information about them.",
    image: "/userFinder.png",
    github: "https://github.com/mhasnain619/newGithubUserFinder",
    link: "https://new-github-user-finder.vercel.app/",
  },
    {
    name: "Realme Web Clone",
    description: "A visually appealing Realme web interface clone built using React, focusing on fundamental concepts like component-based architecture, JSX, and reusable UI elements. This project is ideal for beginners learning React while building clean, responsive, and modular user interfaces",
    image: "/realme.png",
    github: "https://github.com/mhasnain619/realme.pk",
    link: "https://realme-pk.vercel.app/",
  },
   {
    name: "Boldo",
    description: "We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app",
    image: "/boldo.png",
    github: "https://github.com/mhasnain619/boldo",
    link: "https://boldo-flame.vercel.app/",
  },
  
  {
    name: "React Essentials",
    description: "Fundamental React concepts you will need for almost any app you are going to build!",
    image: "/reactEssentials.png",
    github: "https://github.com/mhasnain619/react",
    link: "https://react-essentials-theta.vercel.app/",
  },


   {
    name: "Hoobank",
    description: "Hoobank the next generation payment method. You do the business, we’ll handle the money.",
    image: "/newHoobank.png",
    github: "https://github.com/mhasnain619/HooBank",
    link: "https://hoo-bank-pied.vercel.app/",
  },
  {
    name: "Weather App",
    description:"A Weather App is a user-friendly application designed to provide real-time weather updates and forecasts.",
    image: "/weather.png",
    github: "https://github.com/mhasnain619/Weather-app",
    link: "https://weather-app-blush-delta-46.vercel.app/",
  },
  
  {
    name: "Quiz App",
    description:
      "Quiz app using Html,Css & Js",
    image: "/Quizz-App.png",
    github: "https://github.com/mhasnain619/Quiz-App",
    link: "https://mhasnain619.github.io/Quiz-App/quiz.html",
  },
  {
    name: "Travel Website",
    description: "We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app",
    image: "/travel.png",
    github: "https://github.com/mhasnain619/travel",
    link: "#",
  },
   {
    name: "Facebook Profile",
    description:
      "Facebook profile page created using react js.",
    image: "/FBprofile.png",
    github: "https://github.com/mhasnain619/react-facebookProfile",
    link: "https://react-facebook-profile.vercel.app/",
  },
  {
    name: "Todo",
    description:
      "Todo list created using react js. User can add,delete,edit data.",
    image: "/todo-list.png",
    github: "https://github.com/mhasnain619/todo",
    link: "https://todo-ebon-three.vercel.app/",
  },
  {
    name: "Thankful Thoughts",
    description:
      "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
    image: "/thankfulthoughts.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://thankfulthoughts.io/",
  },
]


const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt="My projects"
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}

      </div>
    </section>
  )
}


export default ProjectsSection
