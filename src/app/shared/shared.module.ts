import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { DropdownDirective } from "./dropdown.directive";

@NgModule({
    declarations: [ DropdownDirective ],
    exports: [
         DropdownDirective,
         CommonModule,
         ReactiveFormsModule
     ]
})

export class SharedModule {}