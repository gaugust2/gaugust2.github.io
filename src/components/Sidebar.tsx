function Sidebar() {
  return (
    <div className='group flex flex-col items-start text-black w-30 hover:w-60 transition-all duration-300 h-1/2 top-1/4 fixed'>
      <ul className='p-4 text-xl'>
        <li className='p-1 mb-4 '>
          <a className="underline-hover" href='#About' data-nav-section='About'>About</a>
        </li>
        <li className='p-1 mb-4'>
          <a className="underline-hover" href='#Experience' data-nav-section='Experience'>Experience</a>
        </li>
        <li className='p-1 mb-4'>
          <a className="underline-hover" href='#Skills' data-nav-section='Skills'>Skills</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar