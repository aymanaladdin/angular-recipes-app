import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { RecipeService } from '../../services/recipe.service';
import { Ingredient } from '../../shared/ingredient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  id: number;
  editMode: boolean;
  recipeForm: FormGroup;

  constructor(private crntRoute: ActivatedRoute, private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'description': new FormControl(null),
      'imgPath': new FormControl(null, Validators.required),
      'ingredients': new FormArray([])
    });

    this.crntRoute.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.editMode = (params['id'])? true: false;

      if(this.editMode){
        const recipe = this.recipeService.getRecipeById(this.id);
        this.recipeForm.patchValue({
          'name': recipe.name,
          'description': recipe.description,
          'imgPath': recipe['imgPath']
        });

        if(recipe.ingredients){
          recipe['ingredients'].forEach(ing => {
            (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
                'name': new FormControl(ing.name, Validators.required),
                'amount': new FormControl(ing.amount, [Validators.required, Validators.min(1)])
            })); 
          });
        }
      }
    });
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
    (this.editMode)? this.recipeService.editRecipe(this.id, this.recipeForm.value) :
                     this.recipeService.addRecipe(this.recipeForm.value);

    this.recipeForm.reset();
    (this.editMode)? this.router.navigate(['/recipies', this.id, 'details']):
                     this.router.navigate(['/recipies'])
  }

  onCancel(){
    this.recipeForm.reset();
    (this.editMode)? this.router.navigate(['/recipies', this.id, 'details']):
                     this.router.navigate(['/recipies'])
  }

}
