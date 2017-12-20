import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { RecipiesRoutingModule } from "./recipies-routing.module";

import { SharedModule } from "../shared/shared.module";


import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipesComponent } from "./recipes.component";
import { EditRecipeComponent } from "./edit-recipe/edit-recipe.component";


@NgModule({
    declarations: [
        RecipeItemComponent,
        RecipeListComponent,
        RecipeDetailsComponent,
        EditRecipeComponent,
        RecipesComponent
    ],
    imports: [
        SharedModule,
        RecipiesRoutingModule
    ]
})

export class RecipiesModule {}