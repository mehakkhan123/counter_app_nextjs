"use client"

import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0)
    function Add(){
        setCount(count+1)
    }
    function Subtract(){
        setCount(count-1)
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col gap-10 items-center justify-center p-9 shadow-md rounded-xl">
            <h1 className="text-3xl text-center">Counter App</h1>
            <div className="flex flex-row gap-4 justify-center items-center">
            <button className="bg-blue-900 text-white text-4xl px-7 rounded-md cursor-pointer hover:bg-blue-900" onClick={Add}>+</button>
            <h1 className="font-bold text-2xl">{count}</h1>
            <button className="bg-amber-950 text-white text-4xl px-7 rounded-md cursor-pointer hover:bg-amber-900" onClick={Subtract}>-</button>
            </div>
            </div>
        </div>
    )
}
