import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit, OnDestroy {
  @Input() recipe : Recipe;
  @Input() id: number;
  recipeSub: Subscription;

  constructor() { 
  }

  ngOnInit() {
    // this.recipeSub = this.recipeService.recipiesChanged.subscribe((data)=>{
    //   // console.log(this.id, data)
    //   if(data.id === this.id) this.recipe = data.recipe;
    // });
 }

 
 ngOnDestroy() {
  // this.recipeSub.unsubscribe();
}

}
