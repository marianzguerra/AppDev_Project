import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage {
  addItem = new FormGroup({
    item : new FormControl('', Validators.required),
    num : new FormControl('', Validators.required),
    qty: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)
  })
  

  constructor( private router:Router,private alertController: AlertController) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['dashboard']);
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'New Item Added Successfully!',
      buttons: [{
        text:'OK',
        role: "confirm",
        }]
    });

    await alert.present();
  }

}
