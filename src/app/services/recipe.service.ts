import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx'
import { Observable } from "rxjs/Observable";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class RecipeService {
    
    recipiesChanged: Subject<any>;

    constructor(private http: Http, private authService: AuthService){
        this.recipiesChanged = new Subject<any>();
    }

    getRecipes():Observable<Recipe[]> {
        const token = this.authService.getToken();

        return this.http.get(`https://ng-http-testing.firebaseio.com/recipies.json?auth=${token}`)
                        .map((response: Response)=> response.json());

    }

    getRecipeById(id: number): Observable<Recipe>{
        const token = this.authService.getToken();
        
        return this.http.get(`https://ng-http-testing.firebaseio.com/recipies/${id}.json?auth=${token}`)
                            .map((response: Response)=> response.json())
                            .catch((error)=> 'something went wrong');
        ;
    }

    addRecipe(recipe: Recipe){
        // this.recipes.push(recipe);
        // this.recipiesChanged.next(this.getRecipes());
        // return this.http.post()
        console.log(recipe);
    }

    editRecipe(index: number, recipe: Recipe){
        // this.recipes[index] = recipe;
        // this.recipiesChanged.next(this.getRecipes());
        
        const token = this.authService.getToken();        
        return this.http.put(`https://ng-http-testing.firebaseio.com/recipies/${index}.json?auth=${token}`, recipe)
                    .map((response: Response)=> response.json())
                    .catch((error)=> 'something went wrong')
        ;
    }

    deleteRecipe(index){
        // this.recipes.splice(index, 1);
        // this.recipiesChanged.next(this.getRecipes());
    }

}