import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormContactComponent } from './form-contact/form-contact.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormContactComponent
  ]
})
export class SharedModule { }
