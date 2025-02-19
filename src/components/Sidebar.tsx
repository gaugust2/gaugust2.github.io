interface SidebarProps {
  sections: {
    href: string,
    name: string
  }[]
}

function Sidebar({ sections }: SidebarProps) {
  return (
    <div className='group flex flex-col items-start text-black w-600 top-1/4 fixed'>
      <ul className={`p-4 text-xl`}>
        {sections.map((section) => (
          <li className='p-1 mb-4'>
            <a className={`underline-hover sidebar-heading-hover`} href={section.href}>{section.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar