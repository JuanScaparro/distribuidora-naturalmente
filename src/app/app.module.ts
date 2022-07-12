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
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductItemComponent } from './pages/store/components/product-item/product-item.component';
import { CardRecipeComponent } from './pages/recipes/components/card-recipe/card-recipe.component';
import { SignUpComponent } from './pages/login/components/sign-up/sign-up.component';

// SERVICES


// PIPES


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'recetas',
    component: RecipesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'tienda',
    component: StoreComponent
  },
  {
    path: 'carrito',
    component: CartComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    RecipesComponent,
    CartComponent,
    LoginComponent,
    ProductItemComponent,
    CardRecipeComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot( routes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
