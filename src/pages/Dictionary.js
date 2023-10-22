import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Dictionary() {
    const [word, setWord] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        console.log("useEffect called", word, [word]);
    });

    return (
        <>
            <div className="flex justify-center items-center flex-col" style={{ width: "50%", margin: "0 auto", height: "100vh", display: "flex", alignItems: "center", paddingTop: "50px", paddingBottom: "50px" }}>
                <div className="mb-4 flex flex-col">
                    <h2 className="text-2xl font-bold mt-4">Word search:</h2>
                    <div className="flex flex-col">
                        <input
                            type="text"
                            onChange={(e) => {
                                setWord(e.target.value);
                            }}
                            className="mt-2 border border-gray-400 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                            
                        <button class="content-center mt-2 bg-blue-700 hover:bg-blue-300 text-white font-bold py-2 mx-8 rounded"
                        onClick={() => {
                            navigate('/defination/' + word, { replace: true });
                            }}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}