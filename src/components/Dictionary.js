import { useState,useEffect } from "react";

export default function Dictionary() {
    const [word, setWord] = useState("");
    
    useEffect(() => {
        console.log("useEffect called", word);
    });
    
    return (
       <>
            <input 
                type="text" 
                onChange={(e) => {
                    setWord(e.target.value);
                }} 
                className="border border-gray-400 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          <h1 className="text-2xl font-bold mt-4">Word: {word}</h1>  
        </>
    );
}