import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})

export class FormContactComponent implements OnInit {

  public contactForm: FormGroup;

  public result: Object = {};

  constructor( private contactService: ContactService ) {
    this.contactForm = new FormGroup({});
  };

  ngOnInit(): void {
    this.buildForm();
  };

  private buildForm() {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      textArea: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(140)]),
    });
  };

  public onSubmit() {
    const { firstName, lastName } = this.contactForm.value;
    this.contactService.postForm( this.contactForm.value ).then( response => {
      if(  this.contactForm.valid && response.id ) {
        this.result = Swal.fire({
                        position: 'bottom-end',
                        icon: 'success',
                        title: `Gracias ${ firstName } ${ lastName } por contactarnos!`,
                        showConfirmButton: false,
                        timer: 2500,
                      })
        this.buildForm()
      } else {
        this.result = Swal.fire({
                        position: 'bottom-end',
                        icon: 'error',
                        title: `Oooops! lo lamentamos, completa todos los campos e intentalo nuevamente!`,
                        showConfirmButton: false,
                        timer: 2500,
                      })
      }
    }).catch( err =>  this.result = Swal.fire({
                                      position: 'bottom-end',
                                      icon: 'error',
                                      title: `Oooops! Nuestros servidores son una mierda`,
                                      showConfirmButton: false,
                                      timer: 2500
                                    }) );
  };

  public getName( firstName: string) {
    return firstName
  }

};
