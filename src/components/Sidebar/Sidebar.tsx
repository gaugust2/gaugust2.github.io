import { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

function Sidebar({ children }: SidebarProps) {
  return (
    <div className='flex flex-col text-white fixed p-4 h-full w-1/4'>
      {children}
    </div>
  )
}

export default Sidebar