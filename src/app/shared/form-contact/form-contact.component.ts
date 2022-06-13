import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  public firstName: FormControl;

  constructor() {
    this.firstName = new FormControl('Juan');

  }

  ngOnInit(): void {
    this.firstName.valueChanges.pipe( ).subscribe(name => console.log(name))
  }

}
