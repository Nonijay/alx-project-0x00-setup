import { title } from "process";
import Pill from "./Pill";
import React from "react";

const Button: React.FC = () => {
    return (
        <div className="h-[500px] w-[300px]">
            <button className="sm:min-w-sm sm:w-sm sm:m-auto md:w-md lg:w-lg bg-blue-500 hover:bg-sky-500 text-white text-1 px-6 py-2 rounded-b-sm">{title}</button>
        </div>
    )
}

export default Button