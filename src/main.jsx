import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import Meals from './Component/Meals/Meals.jsx';
import Blog from './Component/Bolg/Blog.jsx';
import MealShow from './Component/MealShow/MealShow.jsx';
import NotFound from './Component/NotFound/NotFound.jsx';

const router = createBrowserRouter([
{
  path: '/',
  element: <Home></Home>,
  children:[
     {
      path:'about',
      element:<About></About>
     },
     {
     path:'meals',
     element:<Meals></Meals>,
     loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
     },
     {
      path:'meal/:mealId',
      element:<MealShow></MealShow>,
      loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`),
     },
     {
      path:'blog',
      element:<Blog></Blog>
     },
     {
      path:'*',
      element:<NotFound></NotFound>
     }
  ]
}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
