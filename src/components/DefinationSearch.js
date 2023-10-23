import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function DefinitionSearch() {

    const [word, setWord] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <form
                onSubmit={() => {
                    navigate('/defination/' + word);
                }}
            >
                <div className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Enter a word"
                        onChange={(e) => {
                            setWord(e.target.value);
                        }}
                        className="mt-2 border border-gray-400 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />

                    <button class="mx-auto mt-2 bg-blue-700 hover:bg-blue-300 text-white font-bold p-2 rounded"> Search </button>
                </div>

            </form>
        </>
    );
};