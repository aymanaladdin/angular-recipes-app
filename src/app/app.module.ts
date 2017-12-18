import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app.routing.module';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeResolve, RecipesResolve } from './app-routing/resolves/recipe-resolve.service';
import { RecipeService } from './services/recipe.service';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { ShoppinglistService } from './services/shopping-list.service';
import { AuthGuard } from './app-routing/guards/auth.guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    EditRecipeComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [RecipeResolve, RecipesResolve, RecipeService, AuthService, ShoppinglistService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
