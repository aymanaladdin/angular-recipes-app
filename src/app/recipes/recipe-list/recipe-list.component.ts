import { Component, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

import { Recipe } from './../recipe.model';
import { RecipeService } from '../../services/recipe.service';

import { Subscription } from 'rxjs/Subscription';

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
    this.crntRoute.data.subscribe(
      (data: Data)=> this.recipies = data['recipes']
    );

    this.recipeSub = this.recipeService.recipiesChanged.subscribe(
      (recipies: Recipe[]) => this.recipies = recipies
     );
  }

  ngOnDestroy() {
    this.recipeSub.unsubscribe();
  }
}
