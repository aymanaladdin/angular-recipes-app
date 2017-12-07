import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { RecipeService } from "../../services/recipe.service";
import { Recipe } from "../../recipes/recipe.model";

@Injectable()

export class RecipeResolve implements Resolve<Recipe>{
    constructor(private recipeService: RecipeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<Recipe> | Promise<Recipe> | Recipe {
            const id = + route.params['id'];
            return this.recipeService.getRecipeById(id);
        }
    
    
}