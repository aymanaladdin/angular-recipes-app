import { NgModule } from "@angular/core";

import { ShoppingListRoutingModule } from "./shopping-list-routing.module";

import { SharedModule } from "../shared/shared.module";

import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";


@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [
        SharedModule,
        ShoppingListRoutingModule
    ]
})

export class ShoppingListModule {}