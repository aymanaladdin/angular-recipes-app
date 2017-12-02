import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : Recipe;

  @Output() selectedOne: EventEmitter<any>;

  constructor() { 
    this.selectedOne = new EventEmitter();
  }

  ngOnInit() {
    //this.selectedOne.emit(new Recipe("Test Recipe", "Very Nice Description test Very Nice Description testVery Nice Description testVery Nice Description testVery Nice Description test", "http://cdn-image.myrecipes.com/sites/default/files/all-in-one-spaghetti-sl.jpg"));
  }

  selectThis(){
    this.selectedOne.emit();
  }
}
