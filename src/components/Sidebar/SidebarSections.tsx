export interface SidebarSectionsProps {
    sections: {
        href: string
        name: string
    }[]
    onClick?: () => void
}

function SidebarSections({ sections, onClick }: SidebarSectionsProps) {
    return (
        <ul className="text-2xl mt-8">
            {sections.map((section) => (
                <li className='p-1 mb-px' key={section.href}>
                    <a className="underline-hover sidebar-heading-hover" href={section.href} onClick={onClick}>{section.name}</a>
                </li>
            ))}
        </ul>
    )
}

export default SidebarSections