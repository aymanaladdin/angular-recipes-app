import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, Data } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


import { Ingredient } from '../../shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  id: number;
  recipeForm: FormGroup;

  constructor(private crntRoute: ActivatedRoute, private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeForm = this.initRecipeForm();

    this.crntRoute.params.subscribe((params: Params)=>{
      this.id = +params['id'];
    });

    this.crntRoute.data.subscribe(
      (data: Data)=>{
        const recipe = data['recipe']

        this.recipeForm = this.initRecipeForm(recipe);
      }
    )  
  }

  addIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.min(1)])
    })); 
  }

  removeIngredient(index: number){
  
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onSave(){

    if(!isNaN(this.id)){
      this.recipeService.editRecipe(this.id, this.recipeForm.value).subscribe(
        (updatedRecipe)=>{
          this.recipeService.recipiesChanged.next(this.recipeService.getRecipes());
          this.router.navigate(['/recipies', this.id, 'details']);
        }
      );
    }
    else{
      this.recipeService.addRecipe(this.recipeForm.value);      
      this.router.navigate(['/recipies']);
    } 
    
  }

  onCancel(){
    this.recipeForm.reset();
    (this.id)? this.router.navigate(['/recipies', this.id, 'details']):
                     this.router.navigate(['/recipies'])
  }


  private initRecipeForm(recipe: Recipe = undefined): any{
    
    const recipeForm = new FormGroup(
      {
        'name': new FormControl(null, [Validators.required]),
        'description': new FormControl(null),
        'imgPath': new FormControl(null, Validators.required),
        'ingredients': new FormArray([])
      }
    ); 

    if(! recipe){
      return recipeForm; 
    }

    recipeForm.patchValue( 
      { 
        'name': recipe.name, 
        'description': recipe.description,
        'imgPath': recipe['imgPath']
      }
    );
    
    if(recipe.ingredients) {
        recipe.ingredients.
              forEach(ing => {
                (<FormArray>recipeForm.get('ingredients'))
                  .push(
                    new FormGroup(
                      {
                        'name': new FormControl(ing.name, Validators.required),
                        'amount': new FormControl(ing.amount, [Validators.required, Validators.min(1)])
                      }
                    )
                  );
                }
              )
    }

    return recipeForm;
  }

}
