import { Ingredients } from "src/app/shared/ingredient.model";

export interface UserRequirement {
  name: string;
  type: string;
  ingredients: string;
  excludedIngredients: string;
  intolerance: string;
  diet: string;
}