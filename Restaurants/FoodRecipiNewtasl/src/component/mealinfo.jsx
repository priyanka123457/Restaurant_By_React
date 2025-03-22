import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Mealinfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);

  const getInfo = async () => {
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
    const jsonData = await get.json();
    if (jsonData.meals && jsonData.meals.length > 0) {
      setInfo(jsonData.meals[0]);
    }
  };

  useEffect(() => {
    if (mealid) {
      getInfo();
    }
  }, [mealid]);

  return (
    <div className="container mt-5">
      {!info ? (
        <div className="alert alert-warning" role="alert">
          Meal not found.
        </div>
      ) : (
        <div className="row">
          <div className="col-md-6">
            <img
              src={info.strMealThumb}
              alt={info.strMeal}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h1>{info.strMeal}</h1>
            <h3 className="mt-3">Instructions:</h3>
            <p>{info.strInstructions}</p>
            <h4>Ingredients:</h4>
            <ul>
              {Object.keys(info).map((key) => {
                if (key.includes("strIngredient") && info[key]) {
                  return <li key={key}>{info[key]}</li>;
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mealinfo;
