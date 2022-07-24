import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plumbing',
  templateUrl: './plumbing.page.html',
  styleUrls: ['./plumbing.page.scss'],
})
export class PlumbingPage implements OnInit {

  public plumbing: any= [
    {id: 1, name: '1/4" L Copper Pipe', size: "1/4", thick: "0.030", brand: "Zhangu Iron and Steel", qty: 130, cat: 'plumbing'},
    {id: 2, name: '3/4" SCH Galvanized Steel Pipe', size: "3/4", thick: "0.113", brand: "Totten Tubes", qty: 120, cat: 'plumbing'},
    {id: 3, name: '3/8" Polyvinyl Chloride Pipe', size: "3/8", thick: "0.091", brand: "Diamond Plastics Corp.", qty: 86, cat: 'plumbing'},
    {id: 4, name: '90 Degree NPT 1/2" Elbow Pipe', size: "1/2", thick: "0.109", brand: "ORLEIMI", qty: 90, cat: 'plumbing'},
    {id: 5, name: 'Elbow Reducer 90 Degree Pipe', size: "3/4", thick: "0.119", brand: "Solutherm", qty: 95, cat: 'plumbing'}
]

constructor( private router:Router) { }

ngOnInit() {
}

back(){
  this.router.navigate(['view-item']);
}

}
