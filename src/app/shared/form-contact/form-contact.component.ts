import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  public contactForm: FormGroup

  public result: string = ''

  constructor( private contactService: ContactService) {
    this.contactForm = new FormGroup({})
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.contactForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      textArea: new FormControl(''),
    })
  }

  public onSubmit() {
    console.log(this.contactForm.value)

    const { firstName, lastName } = this.contactForm.value

    this.contactService.postForm(this.contactForm.value).then(res => {
      if(res.id) {
        this.result = `Gracias ${firstName} ${lastName} por contactarnos!`
      } else {
        this.result = `Oooops! ${firstName} ${lastName} lo lamentamos, pero hubo un error. Intentalo nuevamente!`
      }
    }).catch( e =>  this.result = `Oooops! Nuestros servidores son una mierda`  )


  }

}
