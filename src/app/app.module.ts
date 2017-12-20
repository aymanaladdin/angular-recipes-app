//Angular Build In Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app.routing.module';
import { HttpModule } from '@angular/http'

//Feature Modules
import { AuthModule } from './auth/auth.module';
// import { RecipiesModule } from './recipes/recipies.module';
// import { ShoppingListModule } from './shopping-list/shopping-list.module';

//Shared Modules
import { SharedModule } from './shared/shared.module';

//Module Component and Directive Declaration
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

//Module Services Provider
import { RecipeResolve, RecipesResolve } from './app-routing/resolves/recipe-resolve.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './app-routing/guards/auth.guard.service';
import { RecipeService } from './recipes/recipe.service';
import { ShoppinglistService } from './shopping-list/shopping-list.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    // RecipiesModule,
    // ShoppingListModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [RecipeResolve, RecipesResolve, RecipeService, AuthService, ShoppinglistService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
