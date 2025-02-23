import { ReactNode } from "react";

interface BodyProps {
  children: ReactNode
  className: string
  onClick?: () => void
}

function Body({ children, className, onClick }: BodyProps) {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
}

export default Body