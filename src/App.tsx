//import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  const sections = [
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

  return (
    <div className='font-sans'>
      <div className='flex h-screen'>
        <Sidebar sections={sections} />
        <div className='ml-50 flex-1 p-6'>
          Content
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