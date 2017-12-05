import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : Recipe;

  constructor(private recipeService: RecipeService) { 
  }

  ngOnInit() {
    //this.selectedOne.emit(new Recipe("Test Recipe", "Very Nice Description test Very Nice Description testVery Nice Description testVery Nice Description testVery Nice Description test", "http://cdn-image.myrecipes.com/sites/default/files/all-in-one-spaghetti-sl.jpg"));
  }

  selectThis(){
    this.recipeService.selectRecipe.emit(this.recipe);
    //console.log(this.recipe);
  }
}
