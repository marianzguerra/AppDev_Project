import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-paint',
  templateUrl: './paint.page.html',
  styleUrls: ['./paint.page.scss'],
})
export class PaintPage implements OnInit {

  public paint: any= [
    {id: 1, name: 'Aqua Gloss IT Odorless Enamel Paint', brand: "Davies", size: "4 Liters", base: "Water-based", best: "Wood and Metal", cat: 'paint'},
    {id: 2, name: 'Quick Dry Enamel Paint', brand: "Boysen", size: "1 Gallon", base: "Water-based",  best: "Wood and Metal", cat: 'paint'},
    {id: 3, name: 'Acqua Epoxy Enamel', brand: "Boysen", size: "4 Liters", based: "Water-based", best: "Concrete floor", cat: 'paint'},
    {id: 4, name: 'Rubber Coat 100% Waterproof Rubberized Membrane', brand: "Cambridge", size: "4 Liters", base: "Acrylic-based",best: "Flat Roofs",  cat: 'paint'},
    {id: 5, name: 'Megacryl MCS Semi Gloss 100% Acrylic Latex Paint', brand: "Davies", size: "4 Liters", base: "Acrylic-based", best: "Properly primed wood and metal", cat: 'paint'}
]

constructor( private router:Router,private alertController: AlertController) { }

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
        cssClass: 'alert-button-cancel'
      },
      {
        text: 'Yes',
        cssClass: 'alert-button-confirm'
      }
    ]
  });

  await alert.present();
}

}