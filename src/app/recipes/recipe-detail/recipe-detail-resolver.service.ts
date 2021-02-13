import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/config/AppConfig';
import { RecipeDetail } from './recipe-detail.model';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Resolve, RouterStateSnapshot } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

//Need to implement a resolver
@Injectable()
export class RecipeDetailResolver implements Resolve<RecipeDetail> {

    constructor(private http: HttpClient, private config: AppConfig, private recipeservice: RecipeService, private route: ActivatedRoute,){}

    private BaseURI = this.config.setting['PathAPI'];

    recipeDetail: Observable<RecipeDetail>;

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RecipeDetail> | Promise<RecipeDetail> | RecipeDetail {
        let id = 1;
        let recipe: Recipe;

        return this.route.params.pipe(
            switchMap((params: Params) => {
                //id = +params['id'];
                recipe = this.recipeservice.getRecipeById(id); //This is not working
                let newid = recipe.id.toString();
                return this.http.get<RecipeDetail>(this.BaseURI + newid + "/summary")
            }));
    }
}
