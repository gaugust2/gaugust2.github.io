import { Tooltip } from "@material-tailwind/react"

interface Skill {
    iconName: string | undefined
    IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface SkillsProps {
    skills: { 
        [key: string]: Skill[] 
    }
}

function Skills({ skills }: SkillsProps) {
    return (
        <ul className="columns-1 md:columns-2 lg:columns-3">
            {Object.keys(skills).map((k) => {
                const list = skills[k]
                return (
                    <li className="break-inside-avoid p-3" key={k}>
                        <h1 className="underline mb-4"><strong>{k}</strong></h1>
                        <ul className="text-center lg:mx-0 lg:max-w-none flex gap-2 flex-wrap">
                            {list.map(({ iconName, IconComponent }) => (
                                <li className="relative" key={iconName}>
                                    <Tooltip content={iconName}>
                                        <IconComponent className="w-12 h-12 hover:text-gray-400" />
                                    </Tooltip>
                                </li>
                            ))}
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

export default Skills