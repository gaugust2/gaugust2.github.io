import { ReactNode } from "react";

interface BodyProps {
  children: ReactNode;
}

function Body({ children }: BodyProps) {
  return (
    <div className='ml-[30%] flex-1 p-4 break-normal overflow-x-auto'>
      {children}
    </div>
  )
}

export default Body