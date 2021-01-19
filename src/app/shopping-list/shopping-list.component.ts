import { Component, Input, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];
  
  constructor(private shoppinglistservice: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppinglistservice.getIngredients();
    this.shoppinglistservice.ingredientsChanged //Listening to the ingredientschanged event, so when an event happens, this prompts ngOnInit().
      .subscribe(
        (ingredient: Ingredients[]) => {
          this.ingredients = ingredient;
        }
      );
  }

  /*onAddIng(Ing: Ingredients){
    this.ingredients.push(Ing);
  }*/

}
