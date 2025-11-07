import type {ButtonHTMLAttributes, ReactNode } from "react"

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    className?: string;
}
const Button = ({children, className, ...rest}: Iprops)=>{
    return (
      <button
        className={`${className} text-center p-1.5 rounded-md w-full text-white font-bold`} {...rest}>
        {children}
      </button>
    );
}

export default Button