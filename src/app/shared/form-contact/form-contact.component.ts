import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      textArea: new FormControl(''),
    });
  };

  public onSubmit() {
    const { firstName, lastName } = this.contactForm.value;
    this.contactService.postForm( this.contactForm.value ).then( response => {
      if( response.id ) {
        this.result = Swal.fire({
                        position: 'bottom-end',
                        icon: 'success',
                        title: `Gracias ${ firstName } ${ lastName } por contactarnos!`,
                        showConfirmButton: false,
                        timer: 2500,
                      })
      } else {
        this.result = Swal.fire({
                        position: 'bottom-end',
                        icon: 'error',
                        title: `Oooops! ${ firstName } ${ lastName } lo lamentamos, pero hubo un error. Intentalo nuevamente!`,
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

};
