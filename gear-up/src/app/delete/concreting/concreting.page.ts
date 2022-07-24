import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


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
    icon: "checkmark-done-outline",
    cssClass: "custom-toast",
    color: "success",
    duration: 3000
  });
  await toast.present();
}

}

