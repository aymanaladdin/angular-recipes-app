import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailsComponent } from "./recipes/recipe-details/recipe-details.component";
import { EditRecipeComponent } from "./recipes/edit-recipe/edit-recipe.component";
    
import { RecipeResolve, RecipesResolve } from "./app-routing/resolves/recipe-resolve.service";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { AuthGuard } from "./app-routing/guards/auth.guard.service";

const appRoutes: Routes = [
    {
        path: 'recipies',
        component: RecipesComponent,
        resolve: {recipes: RecipesResolve},
        canActivate: [AuthGuard],
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
    {
        path: 'shopping-list',
        component: ShoppingListComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'signin',
        component: SigninComponent
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
