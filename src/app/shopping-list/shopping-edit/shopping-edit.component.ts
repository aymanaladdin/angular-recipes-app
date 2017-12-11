import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ShoppinglistService } from '../../services/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  
  shoppingEditForm: FormGroup;
  slectIngrSub: Subscription;
  editMode: boolean;

  constructor(private shoppinglistService: ShoppinglistService) {
    this.editMode = false;
   }

  ngOnInit() {
    this.shoppingEditForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null,[Validators.required, Validators.min(1)])
    });

    this.slectIngrSub = this.shoppinglistService.selectedIngredient.subscribe(
      (index: number)=> {
        this.editMode = true;
        const editedIngredient = this.shoppinglistService.getIngredient(index);
        this.shoppingEditForm.patchValue({'name': editedIngredient.name, 'amount': editedIngredient.amount });
    });
  }

  onSubmint(){
    (this.editMode)? this.shoppinglistService.editIngredient(this.shoppingEditForm.value['name'], this.shoppingEditForm.value['amount']):
                     this.shoppinglistService.addIngredient(this.shoppingEditForm.value['name'], this.shoppingEditForm.value['amount']);    
    
    this.shoppingEditForm.reset();
    this.editMode =false;     
  }

  onDelete(){
    this.shoppinglistService.deleteIngredient(this.shoppingEditForm.value['name']);
    this.editMode = false;
    this.shoppingEditForm.reset();
  }

  onDiscard(){
    this.shoppingEditForm.reset();
    this.editMode =false;     
  }

  ngOnDestroy(){
    this.slectIngrSub.unsubscribe();
  }
}
