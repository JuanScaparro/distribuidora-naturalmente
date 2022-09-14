// EXTERNAL
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// MODULES


// COMPONENTS
import { CartComponent } from './pages/cart/cart.component';
import { FullRecipeComponent } from './pages/full-recipe/full-recipe.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { StoreComponent } from './pages/store/store.component';

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
