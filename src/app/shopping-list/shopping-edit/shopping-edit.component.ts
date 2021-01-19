import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') inputName : ElementRef;
  @ViewChild('inputAmount') inputAmount : ElementRef;
  //@Output() newIngAdd = new EventEmitter<Ingredients>();
  

  constructor(private shoppinglistservice: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAdd(){
    const ingName = this.inputName.nativeElement.value;
    const ingAmount: number = parseInt(this.inputAmount.nativeElement.value) || 0; 
    const newIngredient = new Ingredients(ingName, ingAmount);
    this.shoppinglistservice.onAddIngredients(newIngredient);
  }

}
