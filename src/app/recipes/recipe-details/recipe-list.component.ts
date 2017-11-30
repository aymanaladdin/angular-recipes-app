import { Component, OnInit } from '@angular/core';

import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [ new Recipe("Test Recipe", "Very Nice Description test Very Nice Description testVery Nice Description testVery Nice Description testVery Nice Description test", "http://cdn-image.myrecipes.com/sites/default/files/all-in-one-spaghetti-sl.jpg"),
                         new Recipe("Test Recipe", "Very Nice Description test Very Nice Description testVery Nice Description testVery Nice Description testVery Nice Description test", "https://www.kannammacooks.com/wp-content/uploads/parotta-recipe-kerala-parotta-1-10.jpg"),  
                         new Recipe("Test Recipe", "Very Nice Description test Very Nice Description testVery Nice Description testVery Nice Description testVery Nice Description test", "https://www.eatingonadime.com/wp-content/uploads/2011/11/homemade-cornbread-square.jpg"),
                         new Recipe("Test Recipe", "Very Nice Description test Very Nice Description testVery Nice Description testVery Nice Description testVery Nice Description test", "https://www.kannammacooks.com/wp-content/uploads/coimbatore-chicken-chinthamani-recipe-1-11.jpg"),  
                         new Recipe("Test Recipe", "Very Nice Description test Very Nice Description testVery Nice Description testVery Nice Description testVery Nice Description test", "http://cdn-image.myrecipes.com/sites/default/files/all-in-one-spaghetti-sl.jpg"),
                         new Recipe("Test Recipe", "Very Nice Description test Very Nice Description testVery Nice Description testVery Nice Description testVery Nice Description test", "https://www.kannammacooks.com/wp-content/uploads/parotta-recipe-kerala-parotta-1-10.jpg")  
                      ];

  constructor() { }

  ngOnInit() {
  }

}
