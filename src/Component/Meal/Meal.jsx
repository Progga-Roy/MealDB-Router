import React from 'react';
import './Meal.css'
import { Link, useNavigate, useNavigation } from 'react-router-dom';
const Meal = ({meal}) => {
    const {strMeal,strMealThumb,strInstructions,idMeal,strCategory} = meal;
    const navigate = useNavigate()
    const handleShowMeal=()=>{
        navigate(`/meal/${idMeal}`)
    }
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h1>{strMeal}</h1>
            <h3>Category: {strCategory}</h3>
            <p title={strInstructions}>{strInstructions.slice(0,200)}.....</p>
            {/* <Link to={`/meal/${idMeal}`}>Show Details</Link> */}
            <button onClick={handleShowMeal}>Show Meal</button>
        </div>
    );
};

export default Meal;