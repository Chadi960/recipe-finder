import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { UserRequirement } from './recipe-list/recipe-form/UserReqirement.model';
import { Recipe } from './recipe.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RecipeService {

  constructor(private httpclient: HttpClient){}

   private recipes: Recipe[] = [
        new Recipe('A Test Recipe','This is simply a test', 'https://hips.hearstapps.com/delish/assets/17/39/1506456246-delish-healthy-chicken-casserole-1.jpg', [new Ingredients('chicken', 4), new Ingredients('Mayo', 2)]),
        new Recipe('A Second Test','This is a second test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/12/10/0/WU1712H_Cauliflower-Mac-and-Cheese_s4x3.jpg.rend.hgtvcom.616.462.suffix/1580140849133.jpeg', [new Ingredients('Cauliflower', 2)])
      ]

    recipeItem = new EventEmitter<Recipe>();

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipeById(id: number){
      return this.recipes[id]
    }

    insertRecipe(recipe){
      this.recipes.push(recipe);
    }

    getRecipeByUserReq(userReq: UserRequirement): Observable<any>{
      let params1 = new HttpParams()
          .set('limitLicense', 'false' )
          .set('offset', '1' )
          .set('query', encodeURIComponent(userReq.name))
          .set('cuisine', encodeURIComponent(' african, chinese, japanese, korean, vietnamese, thai, indian, british, irish, french, italian, mexican, spanish, middle eastern, jewish, american, cajun, southern, greek, german, nordic, eastern european'))
          .set('includeIngredients', encodeURIComponent(userReq.ingredients))
          .set('excludeIngredients', encodeURIComponent(userReq.excludedIngredients))
          .set('intolerances', encodeURIComponent(userReq.intolerance));

      return this.httpclient.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex", {params: params1});
    }
}