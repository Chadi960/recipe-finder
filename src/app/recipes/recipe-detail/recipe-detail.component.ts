import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { RecipeDetail } from './recipe-detail.model';
import { RecipeDetailService } from './recipe-detail.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [RecipeDetailService]
})

export class RecipeDetailComponent implements OnInit {
  // Type Observable for async call back in the template
  recipeDetail: Observable<RecipeDetail>;
  recipe: Recipe;

  constructor(private route: ActivatedRoute, 
              private recipedetailservice: RecipeDetailService, 
              private recipeservice: RecipeService,
              private shoppinglistservice: ShoppingListService,
              ) { }

  ngOnInit(): void {
    let id: number = this.route.snapshot.params['id'];
    this.recipe = this.recipeservice.getRecipeById(id);
    //Sequential execution of observable because RecipeDetail depends on recipe object first
    this.recipeDetail = this.route.params.pipe<RecipeDetail>(
      switchMap((params: Params) => {
          id = +params['id'];           
          this.recipe = this.recipeservice.getRecipeById(id); 
          return this.recipedetailservice.getRecipeDetail(this.recipe.id.toString());
      }))
      /*.subscribe(result =>{
            //this.recipeDetail = Object.assign(new RecipeDetail, result);
            this.recipeDetail = result;
      })*/
  }

  toShoppingList(){
    //this.shoppinglistservice.setIngredients(this.recipeDetail.Ingredients);
  }

}
