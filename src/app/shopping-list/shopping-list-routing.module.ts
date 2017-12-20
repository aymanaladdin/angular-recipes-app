import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from "./shopping-list.component";


const shopListRoutes: Routes = [
    {
        path: 'shopping-list',
        component: ShoppingListComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(shopListRoutes)],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule {}