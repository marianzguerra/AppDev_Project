import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  loginForm = this.formBuilder.group({
    uname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(12)])),
    pass: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(12)]))
  });


  constructor(private router: Router, public formBuilder: FormBuilder) { }

  ngOnInit() {

  }
dashboard(){
  this.router.navigate(['dashboard']);
  this.loginForm.reset();
}
}
