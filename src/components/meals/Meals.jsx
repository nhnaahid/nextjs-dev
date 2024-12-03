"use client"
import { useState } from "react";

const Meals = () => {
    const [search, setSearch] = useState("");
    const handleSearch = e => {
        setSearch(e.target.value);
    }
    console.log(search);
    return (
        <div>
            <input onChange={handleSearch} className="border p-2 rounded-lg" type="text" name="meal" id="" placeholder="search meal by name.." />
            <button className="border p-2 rounded-lg bg-gray-800 text-white">Search</button>
        </div>
    );
};

export default Meals;