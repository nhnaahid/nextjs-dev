export const getMeals = (search) => {
    const res = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
    const data = res.json();
    return data;
}