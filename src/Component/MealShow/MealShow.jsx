import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MealShow = () => {
    const {meal} = useLoaderData()
    console.log(meal)

    return (
        <div>
            <img src={meal.strMealThumb} alt="" />
            <h1>{meal.strMeal}</h1>
        </div>
    );
};

export default MealShow;