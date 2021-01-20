import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  rForm: FormGroup;
  name: string = '';
  type: string  = '';
  ingredients: string = '';
  excludedIngredients: string = '';
  intolerance: string = '';
  diet: string = '';
  

  ngOnInit(): void {
    //refactor this code to group FormGroups
    this.rForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.pattern("^([^0-9]*)$")]), //regex for no numerics
      'type': new FormControl("main course"),
      'ingredients': new FormControl(null, Validators.pattern("^([^0-9]*)$")),
      'excludedIngredients': new FormControl(null, Validators.pattern("^([^0-9]*)$")),
      'intolerance': new FormControl(null, Validators.pattern("^([^0-9]*)$")),
      'diet': new FormControl(null),
    })

  }

  onSumbit(post){
    this.name = post.name;
    this.type = post.type;
    this.ingredients = post.ingredients; //This should be an array
    this.excludedIngredients = post.excludedIngredients;
    this.intolerance = post.intolerance;
    this.diet = post.diet;
  }

}
