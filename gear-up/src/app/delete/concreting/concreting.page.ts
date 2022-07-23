import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-concreting',
  templateUrl: './concreting.page.html',
  styleUrls: ['./concreting.page.scss'],
})
export class ConcretingPage implements OnInit {

  public concreting: any= [
    {id: 1, name: 'Cement', brand: "Phinma Corporation", type:"Low Heat Cement", cap: "300 Pounds", cat: 'masonry'},
    {id: 2, name: 'Hollow Blocks', brand: "Allied Concrete", type: "Partition block", cap: "1/2 inches", cat: 'masonry'},
    {id: 3, name: 'Magnesium Hand Floats', brand: "Marshalltwon", type: "Broken-In", cat: 'masonry'},
    {id: 4, name: 'Wheel Barrow', brand: "Creston", type: "Deep Type", cat: 'masonry'},
    {id: 5, name: 'Cement Mixer Manual', brand: "Phinma Corporation", type: "Pan Type Mixer", cap: "300 Pounds",cat: 'masonry'}
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

