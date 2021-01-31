import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') inputName : ElementRef;
  @ViewChild('inputAmount') inputAmount : ElementRef;

  eForm: FormGroup;
  
  constructor(private shoppinglistservice: ShoppingListService) { }

  ngOnInit(): void {
    this.eForm = new FormGroup({
      'name': new FormControl("", [Validators.required, Validators.pattern("^([^0-9]*)$")]), //regex for no numerics
      'amount': new FormControl(""),
    });
  }

  //Demo test
  onAdd(value){
    const ingName = value.name//this.inputName.nativeElement.value;
    const ingAmount: number = value.amount//parseInt(this.inputAmount.nativeElement.value) || 0; 
    //const newIngredient = new Ingredients(ingName, ingAmount);
    //this.shoppinglistservice.onAddIngredients(newIngredient);
  }

}
