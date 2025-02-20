import SidebarIcons, { SidebarIconsProps } from "./SidebarIcons";
import SidebarSections, {SidebarSectionsProps} from "./SidebarSections";

interface SidebarProps extends SidebarIconsProps, SidebarSectionsProps {}

function Sidebar({ sections, icons }: SidebarProps) {
  return (
    <div className='flex flex-col text-white fixed p-4 h-full w-1/4'>
      <span>
        <h1 className="text-3xl font-bold">Gerald Augustinepillai</h1>
        <h2 className="text-2xl break-words text-gray-400">4th Year Software Engineering Student at Western University</h2>
      </span>
      <SidebarSections sections={sections} />
      <SidebarIcons icons={icons} />
    </div>
  )
}

export default Sidebar