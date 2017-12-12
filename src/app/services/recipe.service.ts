import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";


export class RecipeService {
    
    private recipes: Recipe[];
    recipiesChanged: Subject<Recipe[]>;

    constructor(){
        this.recipiesChanged = new Subject<Recipe[]>();
        this.recipes = [ 
            new Recipe("Test Recipe",
                       "Very Nice Description test ",
                        "http://cdn-image.myrecipes.com/sites/default/files/all-in-one-spaghetti-sl.jpg"
,
                       [
                         new Ingredient('ing1', 6),
                         new Ingredient('ing2', 6),
                         new Ingredient('ing3', 6),
                         new Ingredient('ing4', 6),
                       ]
                    ),
            new Recipe("Test Recipe",
                       "Very Nice Description test ",
                       "https://www.kannammacooks.com/wp-content/uploads/parotta-recipe-kerala-parotta-1-10.jpg",
                        [
                            new Ingredient('ing5', 6),
                            new Ingredient('ing6', 6),
                            new Ingredient('ing7', 6),
                            new Ingredient('ing8', 6),
                        ]
                    ),  
            new Recipe("Test Recipe",
                       "Very Nice Description test ",
                       "https://www.eatingonadime.com/wp-content/uploads/2011/11/homemade-cornbread-square.jpg",
                        [
                            new Ingredient('ing1', 6),
                            new Ingredient('ing1', 6),
                            new Ingredient('ing1', 6),
                            new Ingredient('ing1', 6),
                          ]
                    ),
        ];
    }

    getRecipes(): Recipe[] {
        return this.recipes.slice(); //to return a copy of it not the same reference
    }

    getRecipeById(id: number): Recipe{
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipiesChanged.next(this.getRecipes());
    }

    editRecipe(index: number, recipe: Recipe){
        this.recipes[index] = recipe;
        this.recipiesChanged.next(this.getRecipes());
    }

    deleteRecipe(index){
        this.recipes.splice(index, 1);
        this.recipiesChanged.next(this.getRecipes());
    }

}