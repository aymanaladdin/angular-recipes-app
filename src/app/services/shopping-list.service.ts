import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppinglistService {

    private ingredients: Ingredient[];
    
    ingredientsChanged: EventEmitter<Ingredient[]>;

    constructor(){
        this.ingredients = [];
        this.ingredientsChanged = new EventEmitter<Ingredient[]>();
    }

    getIngredients(): Ingredient[]{
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]){
        ingredients.forEach(ingredient => this.ingredients.push(ingredient)) ;
        this.ingredientsChanged.emit(this.getIngredients());
    }

}