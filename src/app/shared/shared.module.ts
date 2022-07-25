// EXTERNAL
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// MODULES

// COMPONENTS
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { CounterComponent } from './counter/counter.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { RoutesModule } from '../routes.module';



// SERVICES

// PIPE


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormContactComponent,
    CounterComponent,
    CartIconComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RoutesModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormContactComponent,
    CounterComponent,
    CartIconComponent
  ]
})
export class SharedModule { }
