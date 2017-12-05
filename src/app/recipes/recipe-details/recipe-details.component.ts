import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { ShoppinglistService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe: Recipe;
  
  selectedNav: string;
  
  showDropDown: boolean;

  constructor(private shoppinglistService: ShoppinglistService) {
    this.selectedNav = 'description';
    this.showDropDown = false;
   }

  ngOnInit() {
  }

  setActiveNav(nav: string){
    this.selectedNav = nav;
  }

  addToShoppingList(){
    this.shoppinglistService.addIngredients(this.recipe.ingredients);
    this.showDropDown = false;
  }


}
