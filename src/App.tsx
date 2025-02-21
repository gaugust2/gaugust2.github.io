import "./App.css"
import Sidebar from "./components/Sidebar/Sidebar"
import SidebarIcons from "./components/Sidebar/SidebarIcons";
import SidebarSections from "./components/Sidebar/SidebarSections";
import SidebarHeader from "./components/Sidebar/SidebarHeader";

import Body from "./components/Body/Body";

import GithubIcon from "./assets/github.svg?react"
import LinkedInIcon from "./assets/linkedin.svg?react"
import EmailIcon from "./assets/email.svg?react"
import ExperienceIcon from "./assets/experience.svg?react"

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

  return (
    <div className='min-h-screen font-sans bg-linear-to-r from-black to-indigo-950 text-white'>
      <div className='flex px-4 sm:px-32 pt-[5%]'>
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
              <p>I am seriously passionate about the work that I do, and I'm always looking for ways to improve myself. I try to take full ownership of projects from start to end, maintaining both a big-picture perspective and detail oriented view. I embrace challenging tasks, and look forward to taking on projects outside of my comfort zone. If you'd like to learn more about me, feel free to check out my resume <a href="https://drive.google.com/file/d/15Afo1tLAb8cfbUag5yVIfCgD3q-r3T0U/view?usp=sharing" target="_blank" className="font-bold text-white underline-hover hover:text-gray-300">here</a>.</p>
            </div>
          </section>




          <section id="Experience" className="pt-[15%] space-y-4 text-lg">
            <h1 className="text-4xl"><strong>Professional Work Experience</strong></h1>
            <div className="container mx-auto p-3">
              <ul className="relative border-l-1 border-white">
                <li className="mb-10 flex justify-start ">
                  <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 bg-black">
                    <ExperienceIcon />
                  </span>
                  <div className="pl-8 text-gray-300">
                    <h3 className="text-2xl"><strong>Research & Development Intern</strong></h3>
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
                    <h3 className="text-2xl"><strong>Database Administrator</strong></h3>
                    <p className="text-gray-400 mb-4"><strong>Southside Community Church</strong> - Milton, ON<br />June 2023 - August 2023</p>
                    <div className="space-y-2">
                      <p>During this summer job, I received my first hands-on experience in a technical role, helping out a smaller organization with their database needs. My main responsibility here was to clean up their database, and restructure/improve it where possible.</p>
                      <p>My other responsibilities included writing automations for more efficient data entry/deletion, website refinement, and improving the SEO of their website.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <p>If you'd like to hear more about the specific projects I worked on, please visit the <a href="#Projects" className="font-bold underline-hover hover:text-gray-300">Projects</a> section.</p>
          </section>

          <section id="Education" className="pt-[10%]">
            <h1 className="text-4xl"><strong>Education</strong></h1>
          </section>

          <section id="Projects" className="pt-[10%]">
            <h1 className="text-4xl"><strong>Projects</strong></h1>
          </section>


          <section id="Skills" className="pt-[10%]">
            <h1 className="text-4xl"><strong>Skills</strong></h1>
          </section>

        </Body>

      </div>
    </div >
  )
}

export default App

