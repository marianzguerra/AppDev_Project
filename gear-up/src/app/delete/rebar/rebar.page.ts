import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-rebar',
  templateUrl: './rebar.page.html',
  styleUrls: ['./rebar.page.scss'],
})
export class RebarPage implements OnInit {

  public rebar: any= [
    {id: 1, name: 'Carbon Steel Rebar', size: "#3", manu: "Huayaosteel", length: "13.5 meters", cat: 'rebars'},
    {id: 2, name: 'Hot Dipped Welded Wire Fabric', size: "#4", manu:"Fenghuasteel", length: "20 feet", cat: 'rebars'},
    {id: 3, name: ' Glass Fiber Reinforced Polymer Rebar', size: "38mm", manufacturer: "Armastek Philippines", length: "15mm", cat: 'rebars'},
    {id: 4, name: 'Epoxy Coated Rebar', size: "#4", manu: "SteelAsia", length: "42.7", cat: 'rebars'},
    {id: 5, name: 'Stainless Steel Rebar', size: "3/8", manu: "SteelAsia", length: "20 ft", cat: 'rebars'}
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