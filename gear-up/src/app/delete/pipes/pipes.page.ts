import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.page.html',
  styleUrls: ['./pipes.page.scss'],
})
export class PipesPage implements OnInit {

  public pipes: any= [
    {id: 1, name: '1/4" L Copper Pipe', size: "1/4", thick: "0.030", brand: "Zhangu Iron and Steel", cat: 'plumbing'},
    {id: 2, name: '3/4" SCH Galvanized Steel Pipe', size: "3/4", thick: "0.113", brand: "Totten Tubes", cat: 'plumbing'},
    {id: 3, name: '3/8" Polyvinyl Chloride Pipe', size: "3/8", thick: "0.091", brand: "Diamond Plastics Corp.", cat: 'plumbing'},
    {id: 4, name: '90 Degree NPT 1/2" Elbow Pipe', size: "1/2", thick: "0.109", brand: "ORLEIMI", cat: 'plumbing'},
    {id: 5, name: 'Elbow Reducer 90 Degree Pipe', size: "3/4", thick: "0.119", brand: "Solutherm", cat: 'plumbing'}
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