// EXTERNAL
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// MODULES

// COMPONENTS
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { HomeComponent } from '../pages/home/home.component';
import { StoreComponent } from '../pages/store/store.component';
import { RecipesComponent } from '../pages/recipes/recipes.component';
import { CartComponent } from '../pages/cart/cart.component';
import { LoginComponent } from '../pages/login/login.component';

// SERVICES

// PIPE

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
    HeaderComponent,
    FooterComponent,
    FormContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot( routes )
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormContactComponent
  ]
})
export class SharedModule { }
