import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe

  constructor() {
    //setTimeout(()=>{this.selectedRecipe = new Recipe('nn', 'vv', 'asdasd');}, 3000);
   }

  ngOnInit() {
  }

  selectRecipe(recipe: Recipe){
    this.selectedRecipe = recipe;
  }
}
