import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";


import { Recipe } from "../../recipes/recipe.model";
import { RecipeService } from "../../recipes/recipe.service";

@Injectable()
export class RecipeResolve implements Resolve<Recipe>{
    constructor(private recipeService: RecipeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<Recipe> | Promise<Recipe> | Recipe {
            const id = + route.params['id'];
            return this.recipeService.getRecipeById(id);
        }
}

@Injectable()
export class RecipesResolve implements Resolve<Recipe[]>{
    constructor(private recipeService: RecipeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
            return this.recipeService.getRecipes();
        } 
}
