import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";


export class RecipeService {
    
    private recipes: Recipe[];

    constructor(){
        this.recipes = [ 
            new Recipe("Test Recipe",
                       "Very Nice Description test ",
                       [
                           "http://cdn-image.myrecipes.com/sites/default/files/all-in-one-spaghetti-sl.jpg"
                        ],
                       [
                         new Ingredient('ing1', 6),
                         new Ingredient('ing1', 6),
                         new Ingredient('ing1', 6),
                         new Ingredient('ing1', 6),
                       ]
                    ),
            new Recipe("Test Recipe",
                       "Very Nice Description test ",
                        [
                            "https://www.kannammacooks.com/wp-content/uploads/parotta-recipe-kerala-parotta-1-10.jpg"
                        ],
                        [
                            new Ingredient('ing1', 6),
                            new Ingredient('ing1', 6),
                            new Ingredient('ing1', 6),
                            new Ingredient('ing1', 6),
                        ]
                    ),  
            new Recipe("Test Recipe",
                       "Very Nice Description test ",
                       [
                           "https://www.eatingonadime.com/wp-content/uploads/2011/11/homemade-cornbread-square.jpg"
                        ],
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

}