import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-insulation',
  templateUrl: './insulation.page.html',
  styleUrls: ['./insulation.page.scss'],
})
export class InsulationPage implements OnInit {

  public insulation: any= [
    {id: 1, name: 'Grade Fiberglass Roofing', size: "32", thick: "1.5mm", cat: 'insulation'},
    {id: 2, name: 'Bitumen Roofing Sheets', size: "950mm x 2000mm", thick: "2.6mm",  cat: 'insulation'},
    {id: 3, name: 'Metal Corrugated Roofing Sheets', size: "960mm x1200mm", thick: "1.2mm",  cat: 'insulation'},
    {id: 4, name: 'Stone-coated Metal Roofing', size: "53 x 17", thick: "29-guage",  cat: 'insulation'},
    {id: 5, name: 'Asphalt Shingle roof', size: "13 1/4 x 12", thick: "3/16",  cat: 'insulation'}
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
    color: "success",
    duration: 3000
  });
  await toast.present();
}

}
