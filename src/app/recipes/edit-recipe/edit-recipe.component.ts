import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  id: number;
  editMode: boolean;

  constructor(private crntRoute: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.crntRoute.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.editMode = (params['id'])? true: false;
    });
  }

}
