
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure you have Bootstrap CSS imported
import { NavLink } from 'react-router-dom';

const Mealcard = ({ details }) => {
  console.log(details);

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          {!details ? "" : details.map((curtItem, index) => {
            return (
              <div key={index} className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src={curtItem.strMealThumb}
                    className="card-img-top"
                    alt={curtItem.strMeal}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{curtItem.strMeal}</h5>
                    <NavLink to = {`/${curtItem.idMeal}`}>
                    <button className="btn btn-primary">Recipe</button>


                    </NavLink>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Mealcard;
