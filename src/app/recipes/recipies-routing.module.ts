import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecipesComponent } from "./recipes.component";
import { EditRecipeComponent } from "./edit-recipe/edit-recipe.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";

import { AuthGuard } from "../app-routing/guards/auth.guard.service";
import { RecipesResolve, RecipeResolve } from "../app-routing/resolves/recipe-resolve.service";



const recipiesRoutes: Routes = [
    {
        path: '',
        component: RecipesComponent,
        resolve: {recipes: RecipesResolve},
        children: [
            {
                path: 'new',
                component: EditRecipeComponent,
            },
            {
                path: ':id/details',
                component: RecipeDetailsComponent,
                resolve: {recipe: RecipeResolve},
            },
            {
                path: ':id/edit',
                component: EditRecipeComponent,
                resolve: {recipe: RecipeResolve}
            }
        ]
    },
] 

@NgModule({
    imports: [ 
        RouterModule.forChild(recipiesRoutes)
     ],
    exports: [ RouterModule ]
})

export class RecipiesRoutingModule {}