import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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

constructor( private router:Router,private alertController: AlertController) { }

ngOnInit() {
}

back(){
  this.router.navigate(['delete-item']);
}
async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Important message',
    message: 'This is an alert!',
    buttons: ['OK']
  });

  await alert.present();
}

}
