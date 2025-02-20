export interface SidebarHeaderProps {
    header: {
        name: string
        description: string
    }
}

function SidebarHeader({ header }: SidebarHeaderProps) {
    return (
        <span>
            <h1 className="text-3xl font-bold">{header.name}</h1>
            <h2 className="text-2xl break-words text-gray-400">{header.description}</h2>
        </span>
    )
}

export default SidebarHeader