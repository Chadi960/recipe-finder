import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  recipeItem : Recipe;

  constructor(private recipeservice: RecipeService) { }

  ngOnInit(): void {
    this.recipeservice.recipeItem.subscribe((e: Recipe) => this.recipeItem = e);
  }

  onChosenRecipe(recipe: Recipe){
    this.recipeItem = recipe;
  }

}
