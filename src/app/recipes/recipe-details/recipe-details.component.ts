import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute,Router, Data, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { Subscription } from 'rxjs';
import { ShoppinglistService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {

  recipe: Recipe;
  id: number;
  recipeSub: Subscription;
  
  selectedNav: string;
  showDropDown: boolean;

  constructor(private shoppinglistService: ShoppinglistService,
              private recipeService: RecipeService,
              private crntRoute: ActivatedRoute,
              private router: Router
            ) {
    this.selectedNav = 'description';
    this.showDropDown = false;
   }

  ngOnInit() {
    this.crntRoute.params.subscribe((params: Params)=> this.id = params['id']);
    this.crntRoute.data.subscribe((data: Data)=> this.recipe = data['recipe']); 

  }

  setActiveNav(nav: string){
    this.selectedNav = nav;
  }

  onAddToShpingList(){
    this.shoppinglistService.addIngredients(this.recipe.ingredients);
    this.showDropDown = false;
    // this.router.navigate(['/shopping-list']);

  }

  onEditRecipe(){
    this.router.navigate(['../../', this.id, 'edit'],{relativeTo: this.crntRoute});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipies']);
  }

   
 ngOnDestroy() {
}


}
