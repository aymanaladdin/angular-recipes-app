import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectRecipe: EventEmitter<Recipe>

  recipies: Recipe[];

  constructor() {
    this.recipies = [ new Recipe("Test Recipe", "Very Nice Description test ", "http://cdn-image.myrecipes.com/sites/default/files/all-in-one-spaghetti-sl.jpg"),
                      new Recipe("Test Recipe", "Very Nice Description test ", "https://www.kannammacooks.com/wp-content/uploads/parotta-recipe-kerala-parotta-1-10.jpg"),  
                      new Recipe("Test Recipe", "Very Nice Description test ", "https://www.eatingonadime.com/wp-content/uploads/2011/11/homemade-cornbread-square.jpg"),
                      new Recipe("Test Recipe", "Very Nice Description test ", "https://www.kannammacooks.com/wp-content/uploads/coimbatore-chicken-chinthamani-recipe-1-11.jpg"),  
                      new Recipe("Test Recipe", "Very Nice Description test ", "http://cdn-image.myrecipes.com/sites/default/files/all-in-one-spaghetti-sl.jpg"),
                      new Recipe("Test Recipe", "Very Nice Description test ", "https://www.kannammacooks.com/wp-content/uploads/parotta-recipe-kerala-parotta-1-10.jpg")  
                    ];
    
    this.selectRecipe = new EventEmitter<Recipe>();

   }

  ngOnInit() {
    //this.selectRecipe.emit(this.recipies[0]);
  }

  selectedOne(recipe: Recipe){
    this.selectRecipe.emit(recipe);
  }

}
