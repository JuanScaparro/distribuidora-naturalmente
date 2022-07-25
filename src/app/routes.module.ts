// EXTERNAL
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// MODULES


// COMPONENTS
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { FullRecipeComponent } from './pages/full-recipe/full-recipe.component';

// SERVICES


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'recetas/:id',
    component: FullRecipeComponent
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
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutesModule { }
