import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { ContactService } from '../../services/contact.service';

import { ErrorMessages, FieldLabels, ModalMessages } from 'src/app/utils/constants';
import { hasFieldError } from 'src/app/utils/forms';


@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})

export class FormContactComponent implements OnInit {

  public contactForm: FormGroup;

  public errorMessages: any; 
  public fieldLabels: any;


  constructor( private contactService: ContactService ) {
    this.errorMessages = ErrorMessages;
    this.fieldLabels = FieldLabels;
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
        Swal.fire({
                        position: 'bottom-end',
                        icon: 'success',
                        title: ModalMessages.SUCCESS.replace('#username', `${firstName} ${lastName}`),
                        showConfirmButton: false,
                        timer: 2500,
                      })
        this.buildForm()
      } else {
        Swal.fire({
                        position: 'bottom-end',
                        icon: 'error',
                        title: ModalMessages.ERROR_VALIDATION,
                        showConfirmButton: false,
                        timer: 2500,
                      })
      }
    }).catch( err => Swal.fire({
                                      position: 'bottom-end',
                                      icon: 'error',
                                      title: ModalMessages.ERROR_CONEXION,
                                      showConfirmButton: false,
                                      timer: 2500
                                    }) );
  };


  public hasError( fieldName: string ): boolean {
    return hasFieldError(this.contactForm, fieldName)
  }

};
