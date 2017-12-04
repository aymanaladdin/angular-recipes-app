import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe: Recipe;

  selectedNav: string;
  
  showDropDown: boolean;

  constructor() {
    this.selectedNav = 'description';
    this.showDropDown = false;
   }

  ngOnInit() {
  }

  setActiveNav(nav: string){
    this.selectedNav = nav;
  }


}
