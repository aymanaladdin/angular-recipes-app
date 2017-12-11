import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppinglistService {

    private ingredients: Ingredient[];
    
    ingredientsChanged: Subject<Ingredient[]>;
    selectedIngredient: Subject<number>;

    constructor(){
        this.ingredients = [];
        this.ingredientsChanged = new Subject<Ingredient[]>();
        this.selectedIngredient = new Subject<number>();
    }

    getIngredient(index: number): Ingredient{
        return this.ingredients[index];
    }

    getIngredients(): Ingredient[]{
        return this.ingredients.slice();
    }
    
    addIngredient(name: string, amount: string, fireEvent: boolean = true){
        const index = this.indexOfIngredient(name);

        (index === -1)? this.ingredients.push(new Ingredient(name, amount)) : 
                         this.ingredients[index].amount += amount;

        if(fireEvent) this.ingredientsChanged.next(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]){
        ingredients.forEach(ingredient => this.addIngredient(ingredient.name, ingredient.amount, false));
        this.ingredientsChanged.next(this.getIngredients());
    }

    editIngredient(name: string, amount: string){
        const index = this.indexOfIngredient(name);
        this.ingredients[index].amount = amount
        this.ingredientsChanged.next(this.getIngredients());    
    }
    
    deleteIngredient(name: string){
        const index = this.indexOfIngredient(name);
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.getIngredients());
    }

    selectIngredient(index: number){
        this.selectedIngredient.next(index);
    }

    private indexOfIngredient(name: string): number{
        let index = -1
        for(let i = 0; i < this.ingredients.length; i++)
        {
          if(this.ingredients[i].name === name) {
              index = i;
          } 
        }
        return index;
    }

}