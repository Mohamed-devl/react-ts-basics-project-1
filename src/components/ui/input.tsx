import type {InputHTMLAttributes} from "react"
interface Iprops extends InputHTMLAttributes<HTMLInputElement> {}
const Input = ({...rest}: Iprops)=>{
    return (
        <input
          className="bg-white p-1 pl-3 mt-1 rounded-2xl cursor-pointer outline-0 border border-amber-200"
            {...rest}
        />
    );
}

export default Input