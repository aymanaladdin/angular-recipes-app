import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailsComponent } from "./recipes/recipe-details/recipe-details.component";
import { EditRecipeComponent } from "./recipes/edit-recipe/edit-recipe.component";
    
import { RecipeResolve } from "./app-routing/resolves/recipe-resolve.service";

const appRoutes: Routes = [
    {
        path: 'recipies',
        component: RecipesComponent,
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
            }
        ]
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent
    },
    {
        path: '**',
        redirectTo: 'recipies'
    }
    
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
