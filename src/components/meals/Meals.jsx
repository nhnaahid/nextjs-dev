"use client"
import { getMeals } from "@/services/mealsApi";
import { useEffect, useState } from "react";

const Meals = () => {
    const [search, setSearch] = useState("a");
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            const loadedMeals = await getMeals(search);
            setMeals(loadedMeals || []);
        }
        fetchMeals();

    }, [search])

    const handleSearch = e => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <input onChange={handleSearch} className="border p-2 rounded-lg" type="text" name="meal" id="" placeholder="search meal by name.." />
            <button className="border p-2 rounded-lg bg-gray-800 text-white">Search</button>
            <div>
                {
                    meals?.map(meal => <div key={meal.idMeal}>{meal.strMeal}</div>)
                }
            </div>
        </div>
    );
};

export default Meals;