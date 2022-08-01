import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-woodprod',
  templateUrl: './woodprod.page.html',
  styleUrls: ['./woodprod.page.scss'],
})
export class WoodprodPage implements OnInit {

  public wood: any= [
    {id: 1, name: 'Lumber', Size: "2x4 inches", thick: "3/4 inches", qty: 140, cat: 'wood'},
    {id: 2, name: 'Plywood', Size: "4x8 ft", thick: " 1/2 inches",qty: 140, cat: 'wood'},
    {id: 3, name: 'Cross Laminated timbers', Size: "4x12 meters", thick: "2 inches",qty: 140, cat: 'wood'},
    {id: 4, name: 'Hardboard', Size: "4x8 inches", thick: "1/8 inches",qty: 140, cat: 'wood'},
    {id: 5, name: 'Palochina Wood Plank', Size: "2x4x8 ft", thick: ".85 inches",qty: 140, cat: 'wood'}
]

constructor( private router:Router,private alertController: AlertController, public Toast: ToastController) { }

ngOnInit() {
}

back(){
  this.router.navigate(['delete-item']);
}
async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Are you sure you want to delete this item?',
    cssClass: 'custom-alert',
    buttons: [
      {
        text: 'No',
        role: "cancel",
        cssClass: 'alert-button-cancel',
        handler: ()=>{ }
      },
      {
        text: 'Yes',
        cssClass: 'alert-button-confirm',
        handler: ()=> {
            this.ShowMessage();
        }

      }
    ]
  });

  await alert.present();
}

async ShowMessage(){
  let toast = await this.Toast.create({
    message: "Item Deleted Successfully!",
    cssClass: "custom-toast",
    color: "success",
    duration: 3000
  });
  await toast.present();
}

}
