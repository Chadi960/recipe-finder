import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private recipeservice: RecipeService) { }

  ngOnInit() { //populates the recipe array
    this.recipes = this.recipeservice.getRecipes();
  }

  getRecipe(element){
    let arr = element.value.split(' ');
    let searchQuery = '';
    let recipeFetch = [];
    arr.forEach(item => { searchQuery += item + '%20'});

    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query="+searchQuery+"&number=10&offset=0&type=main%20course", {
      "method": "GET",
      "headers": {
      "x-rapidapi-key": "31872d56b4mshead2a138430460cp159015jsn45e3ae74a537",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
      }
    })
    .then(res => res.json())
      .then((data) => {
        data.results.forEach((element) => {
          //Remeber to fix the line below to something better
          let recipe: {name: string, description: string, imagePath: string} = {name: "test", description: "test", imagePath: "test"}
          recipe.name = element.title;
          recipe.description = element.title;
          recipe.imagePath = "https://spoonacular.com/recipeImages/" + element.image;
          console.log(recipe);
          recipeFetch.push(recipe)
        });
        this.recipes = recipeFetch.concat(this.recipes)
      })
    .catch(err => {
      console.error(err);
    });

    

  }

}
