import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, Data, Params } from '@angular/router';

import { RecipeService } from '../../services/recipe.service';
import { ShoppinglistService } from '../../services/shopping-list.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;
  id: number;
  
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
    // console.log(this.crntRoute.snapshot);
    this.router.navigate(['../../', this.id, 'edit'],{relativeTo: this.crntRoute});
  }


}
