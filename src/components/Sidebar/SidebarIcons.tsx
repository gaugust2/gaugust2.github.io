import { ReactElement, SVGProps } from "react";

export interface SidebarIconsProps {
    icons: {
        href: string;
        svg: ReactElement<SVGProps<SVGSVGElement>>;
        myOnClick: (url: string) => void;
    }[]
}

function SidebarIcons({ icons }: SidebarIconsProps) {
    return (
        <div className="mt-8 flex gap-2 flex-wrap">
            {icons.map((icon) => (
                <button className="group" onClick={() => icon.myOnClick(icon.href)}>{icon.svg}</button>
            ))}
        </div>
    )
}

export default SidebarIcons