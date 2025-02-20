export interface SidebarSectionsProps {
    sections: {
        href: string,
        name: string
    }[]
}

function SidebarSections({ sections }: SidebarSectionsProps) {
    return (
        <ul className="text-2xl mt-8">
            {sections.map((section) => (
                <li className='p-1 mb-px'>
                    <a className="underline-hover sidebar-heading-hover" href={section.href}>{section.name}</a>
                </li>
            ))}
        </ul>
    )
}

export default SidebarSections