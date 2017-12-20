import { Component, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

import { Recipe } from './../recipe.model';

import { Subscription } from 'rxjs/Subscription';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipies: Recipe[];
  recipeSub: Subscription;

  constructor(private recipeService: RecipeService, private crntRoute: ActivatedRoute) {

   }

  ngOnInit() {
    // this.crntRoute.data.subscribe(
    //   (data: Data)=> this.recipies = data['recipes']
    // );
    this.recipeService.getRecipes().subscribe((recipes)=>this.recipies = recipes);

    this.recipeSub = this.recipeService.recipiesChanged.subscribe(
      (getRecipes)=>{
        getRecipes.subscribe((recipies)=> this.recipies = recipies)
      }
     );
  }

  ngOnDestroy() {
    this.recipeSub.unsubscribe();
  }
}
