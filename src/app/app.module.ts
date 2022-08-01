// EXTERNAL
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// MODULES
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

// COMPONENTS
import { AppComponent } from './app.component';
import { StoreComponent } from './pages/store/store.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductItemComponent } from './pages/store/components/product-item/product-item.component';
import { CardRecipeComponent } from './pages/recipes/components/card-recipe/card-recipe.component';
import { FullRecipeComponent } from './pages/full-recipe/full-recipe.component';
import { RoutesModule } from './routes.module';

// SERVICES



@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    RecipesComponent,
    CartComponent,
    LoginComponent,
    ProductItemComponent,
    CardRecipeComponent,
    FullRecipeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
