import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../recipe.service';
import { UserRequirement } from './UserReqirement.model'

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  rForm: FormGroup;
  userInput: UserRequirement;
  test: string = "";
  constructor(private recipeservice: RecipeService){
    //this.userInput = new UserRequirement();
  }

  ngOnInit(): void {
    //refactor this code to group FormGroups
    this.userInput = new UserRequirement();

    this.rForm = new FormGroup({
      'name': new FormControl("", [Validators.required, Validators.pattern("^([^0-9]*)$")]), //regex for no numerics
      'type': new FormControl("main course"),
      'ingredients': new FormControl("", Validators.pattern("^([^0-9]*)$")),
      'excludedIngredients': new FormControl("", Validators.pattern("^([^0-9]*)$")),
      'intolerance': new FormControl("", Validators.pattern("^([^0-9]*)$")),
      'diet': new FormControl(""),
    });

  }

  onSumbit(post){
    this.userInput.name = post.name.trim();
    this.userInput.type = post.type;
    this.userInput.ingredients = post.ingredients.split(" ").join("");
    this.userInput.excludedIngredients = post.excludedIngredients.split(" ").join("");
    this.userInput.intolerance = post.intolerance.split(" ").join("");
    this.userInput.diet = post.diet;

    this.recipeservice.getRecipeByUserReq(this.userInput)
      .subscribe((data)=>{
        console.log(data);
      })

    this.rForm.reset();
  }
}
