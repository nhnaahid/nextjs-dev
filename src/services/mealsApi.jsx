export const getMeals = async (search) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
    const data = await res.json();
    return data.meals;
}