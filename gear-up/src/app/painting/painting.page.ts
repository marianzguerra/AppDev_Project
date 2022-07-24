import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.page.html',
  styleUrls: ['./painting.page.scss'],
})
export class PaintingPage implements OnInit {

  public painting: any= [
    {id: 1, name: 'Aqua Gloss IT Odorless Enamel Paint', size: "4 liters", brand: "Davies", base: "Water Based", qty: 35, cat: 'painting'},
    {id: 2, name: 'Quick Dry Enamel Paint', size: "4 liters", brand:"Boysen", base: "Water Based", qty: 25, cat: 'painting'},
    {id: 3, name: 'Acqua Epoxy Enamel', size: "4 liters", brand: "Boysen", base: "Water Based", qty: 30, cat: 'painting'},
    {id: 4, name: 'Rubber Coat Waterproof Rubberized Membrane', size: "4 liters", brand: "Campbridge", base: "Water-Based/Acrylic-Based", qty: 36, cat: 'painting'},
    {id: 5, name: 'Megacryl MCS Semi Gloss Acrylic Latex Paint', size: "4 liters", brand: "Davies", base: "Acrylic Water-Based", qty: 25, cat: 'painting'}
]

constructor( private router:Router) { }

ngOnInit() {
}

back(){
  this.router.navigate(['view-item']);
}

}
