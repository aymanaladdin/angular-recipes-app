import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NotFoundComponent } from "./not-found/not-found.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
    {   
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    //Lazy Loaded Modules
    {
        path: 'recipies',
        loadChildren: './recipes/recipies.module#RecipiesModule'
    },
    {
        path: 'shopping-list',
        loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'
    },
    {
        path: '**',
        component: NotFoundComponent
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
