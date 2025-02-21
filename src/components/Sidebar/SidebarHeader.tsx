export interface SidebarHeaderProps {
    header: {
        name: string
        description: string
    }
}

function SidebarHeader({ header }: SidebarHeaderProps) {
    return (
        <span>
            <strong className="text-3xl">{header.name}</strong>
            <h2 className="text-2xl break-words text-gray-300">{header.description}</h2>
        </span>
    )
}

export default SidebarHeader