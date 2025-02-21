import "./App.css"
import Sidebar from "./components/Sidebar/Sidebar"
import SidebarIcons from "./components/Sidebar/SidebarIcons";
import SidebarSections from "./components/Sidebar/SidebarSections";
import SidebarHeader from "./components/Sidebar/SidebarHeader";

import Body from "./components/Body/Body";

import GithubIcon from "./assets/github.svg?react"
import LinkedInIcon from "./assets/linkedin.svg?react"
import EmailIcon from "./assets/email.svg?react"

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
      href: "#Education",
      name: "Education"
    },
    {
      href: "#Experience",
      name: "Experience"
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
              <p>With over a year of professional experience, I've had the privelege of developing and maintaining software to meet real-world business needs. I've had the opportunity to collaborate with professionals from various backgrounds and work closely with vendors, strengthening my communication and teamwork skills in cross-functional environments. My experience in the non-profit sector has been especially valuable, as I've learned the importance of working towards meaningful goals, creating real, positive change within our society.</p>
              <p>I am seriously passionate about the work that I do, and I'm always looking for ways to improve myself. I try to take full ownership of projects from start to end, maintaining both a big-picture perspective and detail oriented view. I embrace challenging tasks, and look forward to taking on projects outside of my comfort zone. If you'd like to learn more about me, feel free to check out my resume <a href="https://drive.google.com/file/d/1n2vfpcIYJhYJpuWdnEx68vGtbi0mMbvf/view?usp=sharing" target="_blank" className="font-bold text-white underline-hover hover:text-gray-300">here</a>.</p>
            </div>
          </section>

          <section id="Education" className="pt-[10%]">
            <h1 className="text-4xl"><strong>Education</strong></h1>
          </section>

          <section id="Experience" className="pt-[5%] space-y-4 text-xl">
          </section>
          <section id="Skills">
          </section>

        </Body>

      </div>
    </div>
  )
}

export default App

