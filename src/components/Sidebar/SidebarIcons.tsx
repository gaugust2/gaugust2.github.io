import { ReactElement, SVGProps, useState } from "react";
import { Tooltip } from "@material-tailwind/react";
import openPage from "../../utils/openPage";
import handleClipboard from "../../utils/handleClipboard";

export interface SidebarIconsProps {
    icons: {
        href: string
        svg: ReactElement<SVGProps<SVGSVGElement>>
        isTypeURL: boolean
        tooltipContent?: string
    }[]
}

function SidebarIcons({ icons }: SidebarIconsProps) {
    const [copied, setCopied] = useState(false)

    return (
        <div className="mt-8 flex gap-2 flex-wrap">
            {icons.map((icon) => (
                icon.isTypeURL ? (
                    icon.tooltipContent ? (
                        <Tooltip content={icon.tooltipContent} key={icon.href} >
                            <button className="group" onClick={() => openPage(icon.href)} key={icon.href}>
                                {icon.svg}
                            </button>
                        </Tooltip>
                    ) : (
                        <button className="group" onClick={() => openPage(icon.href)} key={icon.href}>
                            {icon.svg}
                        </button>
                    )
                ) : (
                    <Tooltip content={copied ? "Copied" : "Copy"} key={icon.href}>
                        <button onMouseLeave={() => setCopied(false)} className="group" onClick={() => {
                            handleClipboard(icon.href)
                            setCopied(true)
                        }}>
                            {icon.svg}
                        </button>
                    </Tooltip>
                )
            ))}
        </div>
    )
}

export default SidebarIcons