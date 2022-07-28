import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    uname : new FormControl ('', Validators.required),
    pass : new FormControl('', Validators.required)
  })


  constructor(private router: Router) { }

  ngOnInit() {

  }
dashboard(){
  this.router.navigate(['dashboard'])
}
}
