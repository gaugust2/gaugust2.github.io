//import { useState } from 'react'
import "./App.css"
import Sidebar from "./components/Sidebar/Sidebar"
import GithubIcon from "./assets/github.svg?react"
import LinkedInIcon from "./assets/linkedin.svg?react"
import EmailIcon from "./assets/email.svg?react"

function handleClipboard(email: string) {
  navigator.clipboard.writeText(email)
    .then(() => {
      alert("Email copied to clipboard!");
    })
    .catch(err => {
      alert("Failed to copy email: " + err);
    });
}

function openPage(url: string){
  window.open(url, "_blank")
}

function App() {
  const sections = [
    {
      href: "#Home",
      name: "Home"
    },
    {
      href: "#About",
      name: "About"
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
      myOnClick: openPage
    },
    {
      href: "https://www.linkedin.com/in/gerald-augustinepillai-8b3832260",
      svg: <LinkedInIcon className="h-10 w-10 media-icon-hover" />,
      myOnClick: openPage
    },
    {
      href: "a.gerald.2002@gmail.com",
      svg: <EmailIcon className="h-10 w-10 media-icon-hover" />,
      myOnClick: handleClipboard
    }
  ]

  return (
    <div className='min-h-screen font-sans bg-linear-to-r from-black to-indigo-950 text-white'>
      <div className='flex px-4 sm:px-16 pt-[5%]'>
        <Sidebar sections={sections} icons={icons} />
        <div className='ml-[30%] flex-1 p-4 break-all'>
          <section id='Home'>
            ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
          </section>
          <section id='About'>
          </section>
          <section id='Experience'>
          </section>
          <section id='Skills'>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App