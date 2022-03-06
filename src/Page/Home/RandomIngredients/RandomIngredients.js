import React from 'react';
import HomeIngredients from '../../Share/HomeIngredients/HomeIngredients';

const ingredients = ["Vanilla", "Chicken", "Salmon", "Beef", "Pork", "Avocado", "Apple Cider Vinegar", "Asparagus", "Bacon", "Baking Powder", "Balsamic Vinegar", "Basil", "Basil Leaves", "Basmati Rice", "Bay Leaf", "Bay Leaves", "Beef Brisket", "Beef Fillet", "Beef Gravy", "Beef Stock", "Bicarbonate Of Soda", "Biryani Masala", "Black Pepper", "Black Treacle", "Borlotti Beans", "Brown Sugar", "Cayenne Pepper", "Celeriac", "Celery", "Celery Salt", "Chilli", "Cocoa", "Cumin", "Dark Brown Sugar", "Dark Soy Sauce", "Demerara Sugar", "Diced Tomatoes", "Digestive Biscuits", "Eggs", "Fajita Seasoning", "Flax Eggs", "French Lentils", "Ghee", "Ginger Paste",  "Gouda Cheese", "Jalapeno", "Lamb", "Lemon",  "Lettuce", "Mackerel", "Madras Paste",  "Medjool Dates", "Milk",  "Nutmeg",  "Oil", "Onions", "Peas", "Potato Starch", "Potatoes", "Red Wine"]

const RandomIngredients = () => {
    let newIngredients =[];
    for (let i = 1; i <= 4; i++) {
        const randomNumber = parseInt(Math.random() * 60);
        newIngredients.push(ingredients[randomNumber]);
    };
    return (
        <div className="mt-5 mb-5 top-border-global-style">
            <h3 className="text-center mt-3"><b>Random Ingredients</b></h3>
            <div className="row">
                {
                    newIngredients?.map((ingredient, index) => <HomeIngredients key={index} ingredient={ingredient} ></HomeIngredients>)
                }
            </div>
        </div>
    );
};

export default RandomIngredients;