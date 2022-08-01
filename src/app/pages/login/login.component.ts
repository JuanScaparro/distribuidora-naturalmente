import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLogIn: boolean = true;

  public logInGroup = new FormGroup({
    emailLogin: new FormControl('', [Validators.required, Validators.email]),
    passwordLogin: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  public signUpGroup = new FormGroup({
    firstNameRegister: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastNameRegister: new FormControl('', [Validators.required, Validators.minLength(3)]),
    emailRegister: new FormControl('', [Validators.required, Validators.email]),
    passwordRegister: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.isLogIn) {
      console.log(this.logInGroup.value)
      this.logInGroup.reset()
    } else {
      console.log(this.signUpGroup.value)
      this.signUpGroup.reset()
    }
  }
}
