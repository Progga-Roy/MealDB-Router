import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const {meals} = useLoaderData()
    console.log(meals)
   
    return (
        <div className='meals'>
            {/* <h2>Total meals here : {meals.length}</h2> */}
            {
                meals.map(meal=><Meal key={meal.idMeal} meal={meal}></Meal>)
            }
        </div>
    );
};

export default Meals;