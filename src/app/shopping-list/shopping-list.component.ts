import { Component, OnInit, ViewChild } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] //= [new Ingredient('Apple', 5), new Ingredient('Tomato', 12)];

  constructor(private shoppinglistService: ShoppinglistService) { 
    this.ingredients = [];
  }

  ngOnInit() {
    // console.log(this.shoppinglistService)
    this.ingredients = this.shoppinglistService.getIngredients();
    this.shoppinglistService.ingredientsChanged.subscribe( (Ingredients: Ingredient[]) => this.ingredients = Ingredients);
  }

  
  // addIngredient(ingredient: Ingredient){
  //   // this.ingredients.push(ingredient);
  //   this.ingredients = this.shoppinglistService.addIngredient(ingredient);
  // }
}
