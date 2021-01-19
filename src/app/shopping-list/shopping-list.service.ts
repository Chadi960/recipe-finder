import { EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredients[]>(); //Because we are passing a copy of ingredients to our shopping-list component, we need to inform it that that the ingredients chnged so it updates it.

    private ingredients: Ingredients[] = [
        new Ingredients('Apple', 5), new Ingredients('Banana', 4)
      ];

    getIngredients(){ //To get a copy of the ingredients array instead of referencing it, for encapsulation purpose.
        return this.ingredients.slice();
    }

    setIngredients(ingredient: Ingredients[]){ //To add the ingredients of a recipe to the shopping list
        this.ingredients.push(...ingredient);
    }

    onAddIngredients(newIngredient: Ingredients){ //To add ingredients to the ingredients, used on the Add button.
       this.ingredients.push(newIngredient);
       this.ingredientsChanged.emit(this.getIngredients());
    }
}