import "./App.css"
import { Tooltip } from "@material-tailwind/react";
import Sidebar from "./components/Sidebar/Sidebar"
import SidebarIcons from "./components/Sidebar/SidebarIcons";
import SidebarSections from "./components/Sidebar/SidebarSections";
import SidebarHeader from "./components/Sidebar/SidebarHeader";
import Projects from "./components/Body/Projects";

import Body from "./components/Body/Body";

import GithubIcon from "./assets/media/github.svg?react"
import LinkedInIcon from "./assets/media/linkedin.svg?react"
import EmailIcon from "./assets/media/email.svg?react"
import ExperienceIcon from "./assets/experience/experience.svg?react"

import * as moduleExports from "./utils/svgImports"

function App() {
  const header = {
    name: "Gerald Augustinepillai",
    description: "4th Year Software Engineering Student at Western University"
  }

  const sidebarSections = [
    {
      href: "#Home",
      name: "Home"
    },
    {
      href: "#Experience",
      name: "Experience"
    },
    {
      href: "#Education",
      name: "Education"
    },
    {
      href: "#Projects",
      name: "Projects"
    },
    {
      href: "#Skills",
      name: "Skills"
    }
  ]

  const icons = [
    {
      href: "https://github.com/gaugust2",
      svg: <GithubIcon className="h-10 w-10 media-icon-hover" />,
      isTypeURL: true
    },
    {
      href: "https://www.linkedin.com/in/gerald-augustinepillai-8b3832260",
      svg: <LinkedInIcon className="h-10 w-10 media-icon-hover" />,
      isTypeURL: true
    },
    {
      href: "a.gerald.2002@gmail.com",
      svg: <EmailIcon className="h-10 w-10 media-icon-hover" />,
      isTypeURL: false
    }
  ]

  const notableCourses: string[] = ["Database Management Systems", "Software Testing and Maintenance", "Information Security", "Cloud computing: concepts, technologies and application", "Web Technologies", "Software Project and Process Management"]

  const projects = [
    {
      name: "SharpAI",
      description: "Designed and developed an AI-powered sports betting analytics tool which abstracts the researching effort for bettors. This app integrates sports APIs to gather historical and real-time data, and uses Retrieval Augmented Generation (RAG) to analyze, summarize, and present the information in an organized structure.",
      href: "https://github.com/gaugust2/SharpAI",
      technologies: ["React", "Node.js (Express)", "MongoDB", "AWS Lambda"]
    },
    {
      name: "Customer Insights Chatbot",
      description: "Developed a Retrieval Augmented Generation (RAG) chatbot built upon a document library containing with customer insights research. The chatbot efficiently retrieves and summarizes content related to the user's query, enabling easy access to valuable informatoin that was previously difficult to find.",
      technologies: ["HTML", "JavaScript", "TailwindCSS", "Node.js (Express)", "Microsoft SQL", "Azure App Service"]
    }
    ,
    {
      name: "Multithreaded Chatroom",
      description: "Created a command-line chatroom application, utilizing semaphores and multithreading to enable multiple users to create and connect to different chatrooms simultaneously.",
      href: "https://github.com/gaugust2/multithreaded-chatroom",
      technologies: ["C++"]
    },
    {
      name: "Web Crawler",
      description: "Wrote a recursive algorithm to crawl and scrape webpages to automate content extraction from websites. This tool gathers content and stores it for further use, whilst also incorporating generative AI to summarize and transform the content into our own words, ensuring originality and relevance for end-users.",
      technologies: ["Python", "OpenAI (GPT-3.5-Turbo)", "MySQL", "AWS EC2"]
    },
    {
      name: "Music App",
      description: "Built a music library application for an academic project, allowing users to search for songs, create playlists, and share them with other users.",
      href: "https://github.com/gaugust2/music-app",
      technologies: ["React", "TailwindCSS", "Node.js (Express)", "MongoDB", "AWS EC2"]
    },
    {
      name: "Galactical Conquest",
      description: "Created a video game for an academic project, featuring multiple levels, collectables, resources, NPCs, and objectives.",
      href: "https://github.com/cblatt/Galactical-Conquest",
      technologies: ["C#", "Unity"]
    }
  ]

  return (
    <div className='min-h-screen font-sans bg-radial from-indigo-950 to-black text-white animate-gradient'>
      <div className='flex sm:px-32 pt-[5%]'>
        <Sidebar>
          <SidebarHeader header={header} />
          <SidebarSections sections={sidebarSections} />
          <SidebarIcons icons={icons} />
        </Sidebar>



        <Body>
          <section id="Home" className="space-y-2">
            <h2 className="text-7xl">Hello👋 I'm<span className="font-bold text-emerald-300"> Gerald</span></h2>
            <h2 className="text-4xl  ">a Software Engineering student dedicated to creating <strong>impactful solutions.</strong></h2>
            <div className="pt-[5%] space-y-4 text-xl text-gray-300">
              <p>I'm currently in my final year of studies at the University of Western Ontario. Throughout my academic journey, I've built a solid foundation in computer science principles, software development, and problem solving skills. Although though my time as a student is ending, I firmly believe in being a lifelong learner. My expertise currently lies with <strong>Fullstack Development</strong>, <strong>Relational Databases</strong>, <strong>DevOps</strong>, and <strong>Machine Learning/AI</strong>.</p>
              <p>With over a year of professional experience, I've had the privilege of developing and maintaining software to meet real-world business needs. I've had the opportunity to collaborate with professionals from various backgrounds and work closely with vendors, strengthening my communication and teamwork skills in cross-functional environments. My experience in the non-profit sector has been especially valuable, as I've learned the importance of working towards meaningful goals, creating real, positive change within our society.</p>
              <p>I am seriously passionate about the work that I do, and I'm always looking for ways to improve myself. I try to take full ownership of projects from start to end, maintaining both a big-picture perspective and detail oriented view. I embrace challenging tasks, and look forward to taking on projects outside of my comfort zone. If you'd like to learn more about me, feel free to check out my resume <a href="https://drive.google.com/file/d/1u_chzxQuGQkDfTEM8SiYe2QjQMLG-fZ6/view?usp=sharing" target="_blank" className="font-bold text-white underline-hover hover:text-gray-300">here</a>.</p>
            </div>
          </section>




          <section id="Experience" className="space-y-4 text-xl">
            <h1 className="text-4xl"><strong>Professional Work Experience</strong></h1>

            <div className="p-3">
              <ul className="relative border-l-1 border-white">
                <li className="mb-10 flex justify-start ">
                  <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 bg-black">
                    <ExperienceIcon />
                  </span>
                  <div className="pl-8 text-gray-300">
                    <h3 className="text-3xl"><strong>Research & Development Intern</strong></h3>
                    <p className="text-gray-400 mb-4"><strong>World Vision Canada</strong> - Mississauga, ON<br />September 2023 - August 2024</p>
                    <div className="space-y-2">
                      <p>During my internship, I had the opportunity to work with two distinct teams: an <strong>employee-centric team</strong>, and a <strong>cross-functional development team</strong>.</p>
                      <p>On the <strong>employee-centric team</strong>, my main responsibility was to research digital solutions and emerging technologies to improve employee productivity and organizational efficiency. My other main responsibility in this role was developing and creating solutions in house, like Generative AI chatbots, automated workflows, and forms.</p>
                      <p>I worked with the organization's ticket management system to create and manage workflows, service forms, and other automations. I was also exposed to our Microsoft Sharepoint environment, where I also had a chance to use PowerAutomate and PowerApps to create additional automations.</p>
                      <p>Simultaneously, the <strong>cross-functional team</strong> and I worked towards creating a new digital platform for the organization. My main responsibility on this team was to assist in the development of the different applications and components this platform would be using. I was involved in multiple stages of the <strong>software development lifecycle</strong>, from planning and designing to development. I was given a wide range of tasks in this role, including recursive algorithms, relational databases, cloud computing, fullstack development, and more.</p>
                      <p>This internship provided me with exposure to a range of technical challenges, learning how to deal with limited funding and resources, with my work playing a big part in the success and efficiency of the organization.</p>
                    </div>
                  </div>
                </li>

                <li className="mb-10 flex justify-start">
                  <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 bg-black">
                    <ExperienceIcon />
                  </span>
                  <div className="pl-8 text-gray-300">
                    <h1 className="text-3xl"><strong>Database Administrator</strong></h1>
                    <p className="text-gray-400 mb-4"><strong>Southside Community Church</strong> - Milton, ON<br />June 2023 - August 2023</p>
                    <div className="space-y-2">
                      <p>During this summer job, I received valuable hands-on experience working in a technical capacity, helping out a smaller organization with their database needs. My main responsibility was to optimize and restructure the church's database, improving its efficiency and usability.</p>
                      <p>My other responsibilities included writing scripts to automate data entry/deletion processes, website UI/UX refinement, and SEO enhancement of their website.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <p>If you'd like to hear more about the specific projects I worked on, please visit the <a href="#Projects" className="font-bold underline-hover hover:text-gray-300">Projects</a> section.</p>
          </section>




          <section id="Education" className="text-xl space-y-4">
            <h1 className="text-4xl"><strong>Education</strong></h1>
            <div className="">
              <h1 className="text-2xl"><strong>Bachelor's of Engineering Science</strong></h1>
              <p className="text-gray-400 mb-4"><strong>University of Western Ontario</strong> - London, ON<br />September 2020 - April 2025</p>
              <h2 className="mb-px underline">Relevant/Notable Coursework:</h2>
              <ul className="space-y-1 list-disc list-inside">
                {notableCourses.map((course) => <li>{course}</li>)}
              </ul>
            </div>
          </section>




          <section id="Projects" className="text-lg">
            <h1 className="text-4xl mb-4"><strong>Projects</strong></h1>
            <Projects projects={projects} />
          </section>






          <section id="Skills" className="text-xl">
            <h1 className="text-4xl"><strong>Skills</strong></h1>
            <ul className="columns-1 md:columns-2 lg:columns-3">
              {Object.keys(moduleExports).map(k => {
                const list = moduleExports[k]
                return (
                  <li className=" break-inside-avoid p-3" key={k}>
                    <h1 className="underline mb-4"><strong>{k}</strong></h1>
                    <ul className="text-center lg:mx-0 lg:max-w-none flex gap-2 flex-wrap">
                      {list.map(({ iconName, IconComponent }) => (
                        <li className="relative" key={iconName}>
                          <Tooltip content={iconName}>
                            <IconComponent className="w-12 h-12 hover:text-gray-400" />
                          </Tooltip>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              })}
            </ul>
          </section>

        </Body>

      </div>
    </div >
  )
}

export default App


