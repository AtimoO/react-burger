import React from "react";
import ItemDetails from "../item-details/item-details";

import styleIngredientDetails from "./ingredient-details.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const IngredientDetails = () => {
  const { id } = useParams();
  const { ingredients } = useSelector((store) => store.ingredients);

  const ingredient =
    ingredients.length > 0
      ? ingredients.find((i) => i._id === id)
      : {
          image_large: "",
          name: "",
          calories: "",
          proteins: "",
          fat: "",
          carbohydrates: "",
        };


  return (
    <>
      <img className={styleIngredientDetails.image} src={ingredient.image} />
      <p className="text text_type_main-medium pt-4">{ingredient.name}</p>
      <div className={`${styleIngredientDetails.container} pt-8`}>
        <ItemDetails name={"Калории,ккал"} weight={ingredient.calories} />
        <ItemDetails name={"Белки, г"} weight={ingredient.proteins} />
        <ItemDetails name={"Жиры, г"} weight={ingredient.fat} />
        <ItemDetails name={"Углеводы, г"} weight={ingredient.carbohydrates} />
      </div>
    </>
  );
};

export default IngredientDetails;
