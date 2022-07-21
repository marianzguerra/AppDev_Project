import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  

  constructor( private router:Router,private alertController: AlertController) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['dashboard']);
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'New Item Added Successfully!',
      buttons: ['OK']
    });

    await alert.present();
  }

}
