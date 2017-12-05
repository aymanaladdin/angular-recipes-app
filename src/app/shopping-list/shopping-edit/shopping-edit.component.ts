import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppinglistService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientName') name: ElementRef;
  @ViewChild('ingredientAmount') amount: ElementRef;
  
  @Output() ingredientAdded: EventEmitter<Ingredient>;

  constructor(private shoppinglistService: ShoppinglistService) {
    this.ingredientAdded = new EventEmitter<Ingredient>();
   }

  ngOnInit() {
  }

  addIngredient(){
    //  this.ingredientAdded.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value) );
    this.shoppinglistService.addIngredient(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }

  deleteIngredient(){}

  clearIngredients(){}
}
