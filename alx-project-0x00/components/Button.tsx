import { title } from "process";
import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({title, styles}) => {
    return (
        <div className="h-[500px] w-[300px]">
            <button className="sm:min-w-sm sm:w-sm sm:m-auto md:w-md lg:w-lg bg-blue-500 hover:bg-sky-500 text-white text-1 px-6 py-2 rounded-sm h-[50px] w-[100px]">
                { title }
            </button>
        </div>
    )
}

export default Button