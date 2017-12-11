import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  
  ingredients: Ingredient[];
  ingredientsSub: Subscription;

  constructor(private shoppinglistService: ShoppinglistService) { 
    this.ingredients = [];
  }

  ngOnInit() {
    // console.log(this.shoppinglistService)
    this.ingredients = this.shoppinglistService.getIngredients();
    
    this.ingredientsSub = this.shoppinglistService.ingredientsChanged.subscribe( 
          (Ingredients: Ingredient[]) => this.ingredients = Ingredients
        );
  }

  onSelect(i: number){
    this.shoppinglistService.selectIngredient(i);
  }

  ngOnDestroy() {
    this.ingredientsSub.unsubscribe();
    // console.log(this.ingredientsSub)
  }
}

