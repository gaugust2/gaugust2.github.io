export interface SidebarHeaderProps {
    header: {
        name: string
        description: string
    }
}

function SidebarHeader({ header }: SidebarHeaderProps) {
    return (
        <span className="break-words text-xl">
            <strong>{header.name}</strong>
            <h2 className="text-gray-300">{header.description}</h2>
        </span>
    )
}

export default SidebarHeader