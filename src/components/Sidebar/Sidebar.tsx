import { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode
  className: string
}

function Sidebar({ children, className }: SidebarProps) {
  return (
    <aside className={className}>
      {children}
    </aside>
  )
}

export default Sidebar