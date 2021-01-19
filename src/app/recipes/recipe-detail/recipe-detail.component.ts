import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: Recipe;
  constructor(private route: ActivatedRoute , private recipeservice: RecipeService ,private shoppinglistservice: ShoppingListService) { }

  ngOnInit(): void {
    let id: number;
    this.route.params
      .subscribe(
        (params: Params)=>{
          id = +params['id'];
          this.recipeDetail = this.recipeservice.getRecipeById(id);
        }
      )
  }

  toShoppingList(){
    this.shoppinglistservice.setIngredients(this.recipeDetail.Ingredients);
  }

}
