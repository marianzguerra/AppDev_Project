import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    
  ];
  constructor(public router:Router, public Toast: ToastController){}
  
  login(){
    this.router.navigate(['login']);
    this.ShowMessage();
  }

  async ShowMessage(){
    let toast = await this.Toast.create({
      message: "You have been logout!!",
      cssClass: "custom-toast",
      duration: 2000,
      position:'middle'
    });
    await toast.present();
  }
}
