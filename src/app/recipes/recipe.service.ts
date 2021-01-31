import { Injectable } from '@angular/core';
import { UserRequirement } from './recipe-list/recipe-form/UserReqirement.model';
import { Recipe } from './recipe.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { AppConfig } from '../config/AppConfig';

@Injectable()
export class RecipeService {

  constructor(private httpclient: HttpClient, private config: AppConfig){}

   private BaseURI = this.config.setting['PathAPI'];

   private recipes: Recipe[] = [];

    //To let RecipeListComponent know the list is updated
    recipeChanged= new Subject<Recipe[]>();

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipeById(id: number){
      return this.recipes[id]
    }

    insertRecipe(recipe){
      this.recipes.push(...recipe);
      this.recipeChanged.next(this.recipes.slice());
    }

    getRecipeByUserReq(userReq: UserRequirement): Observable<any>{
      let params1 = new HttpParams()
          .set('limitLicense', 'false' )
          .set('offset', '1' )
          .set('query', encodeURIComponent(userReq.name))
          .set('cuisine', encodeURIComponent(' african, chinese, japanese, korean, vietnamese, thai, indian, british, irish, french, italian, mexican, spanish, middle eastern, jewish, american, cajun, southern, greek, german, nordic, eastern european'))
          .set('includeIngredients', encodeURIComponent(userReq.ingredients))
          .set('excludeIngredients', encodeURIComponent(userReq.excludedIngredients))
          .set('intolerances', encodeURIComponent(userReq.intolerance))
          .set('minCalories', '0');

      return this.httpclient.get(this.BaseURI + "searchComplex", { params: params1});
    }
}