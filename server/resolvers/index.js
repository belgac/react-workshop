/**
 * The root file that combines all of our resolvers
 */

import { getIngredient, getIngredients } from '../models/Ingredient.js';
import { getRecipes } from '../models/Recipe.js';


// TODO: Write your resolvers
export default {
	Query: {
		dummy: () => {},
		recipes: (recipe, { vegetarian, ingredient }) => getRecipes({vegetarian, ingredient}),
		ingredients: () => getIngredients({})
	},
	Recipe: {
		ingredients: (recipe) => recipe.ingredients.map((ingredientId) => getIngredient(ingredientId))
	}
};
