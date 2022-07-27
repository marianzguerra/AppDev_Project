import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {
  term: '';
  list = [
    {id: 11, name: 'Lumber', Size: "2x4 inches", thick: "3/4 inches", qty: 140, cat: 'Wood Products'},
    {id: 12, name: 'Plywood', Size: "4x8 ft", thick: " 1/2 inches",qty: 140, cat: 'Wood Products'},
    {id: 13, name: 'Cross Laminated timbers', Size: "4x12 meters", thick: "2 inches",qty: 140, cat: 'Wood Products'},
    {id: 14, name: 'Hardboard', Size: "4x8 inches", thick: "1/8 inches",qty: 140, cat: 'Wood Products'},
    {id: 15, name: 'Palochina Wood Plank', Size: "2x4x8 ft", thick: ".85 inches",qty: 140, cat: 'Wood Products'},
    {id: 21, name: 'A-Grade Fiberglass Roofing', size: "#32", manu: "Polymer Products", thick: "1.5mm", qty: 95, cat: 'Roofing and Insulation'},
    {id: 22, name: 'Bitumen Roofing Sheets', size: "950mm x 2000mm", manu:"Apo Galfan", thick: "2.6mm", qty: 100, cat: 'Roofing and Insulation'},
    {id: 23, name: 'Metal Corrugated Roofing Sheets', size: "960mm x 1200mm", manu: "Puyat Steel Corp", qty: 90, thick: "1.2mm", cat: 'Roofing and Insulation'},
    {id: 24, name: 'Stone-coated Metal Roofing', size: "53 x 17", manu: "Kawara", thick: "29-gauge", qty: 60, cat: 'Roofing and Insulation'},
    {id: 25, name: 'Asphalt Shingle Roof', size: "13 1/4 x 12", manu: "Atlas Roofing Corp.", thick: "3/16", qty: 105, cat: 'Roofing and Insulation'},
    {id: 31, name: 'Carbon Steel Rebar', size: "#3", manu: "Huayaosteel", length: "13.5 meters", qty: 70, cat: 'Rebars and GI Supplies'},
    {id: 32, name: 'Hot Dipped Welded Wire Fabric', size: "#4", manu:"Fenghuasteel", length: "20 feet", qty: 150, cat: 'Rebars and GI Supplies'},
    {id: 33, name: ' Glass Fiber Reinforced Polymer Rebar', size: "38mm", manufacturer: "Armastek Philippines", length: "15mm", qty: 90, cat: 'Rebars and GI Supplies'},
    {id: 34, name: 'Epoxy Coated Rebar', size: "#4", manu: "SteelAsia", length: "42.7", qty: 130, cat: 'Rebars and GI Supplies'},
    {id: 35, name: 'Stainless Steel Rebar', size: "3/8", manu: "SteelAsia", length: "20 ft", qty:120, cat: 'Rebars and GI Supplies'},
    {id: 41, name: '1/4" L Copper Pipe', size: "1/4", thick: "0.030", brand: "Zhangu Iron and Steel", qty: 130, cat: 'Plumbing Pipes & Accessories'},
    {id: 42, name: '3/4" SCH Galvanized Steel Pipe', size: "3/4", thick: "0.113", brand: "Totten Tubes", qty: 120, cat: 'Plumbing Pipes & Accessories'},
    {id: 43, name: '3/8" Polyvinyl Chloride Pipe', size: "3/8", thick: "0.091", brand: "Diamond Plastics Corp.", qty: 86, cat: 'Plumbing Pipes & Accessories'},
    {id: 44, name: '90 Degree NPT 1/2" Elbow Pipe', size: "1/2", thick: "0.109", brand: "ORLEIMI", qty: 90, cat: 'Plumbing Pipes & Accessories'},
    {id: 45, name: 'Elbow Reducer 90 Degree Pipe', size: "3/4", thick: "0.119", brand: "Solutherm", qty: 95, cat: 'Plumbing Pipes & Accessories'},
    {id: 51, name: 'Aqua Gloss IT Odorless Enamel Paint', size: "4 liters", brand: "Davies", base: "Water Based", qty: 35, cat: 'Painting Supplies'},
    {id: 52, name: 'Quick Dry Enamel Paint', size: "4 liters", brand:"Boysen", base: "Water Based", qty: 25, cat: 'Painting Supplies'},
    {id: 53, name: 'Acqua Epoxy Enamel', size: "4 liters", brand: "Boysen", base: "Water Based", qty: 30, cat: 'Painting Supplies'},
    {id: 54, name: 'Rubber Coat Waterproof Rubberized Membrane', size: "4 liters", brand: "Campbridge", base: "Water-Based/Acrylic-Based", qty: 36, cat: 'Painting Supplies'},
    {id: 55, name: 'Megacryl MCS Semi Gloss Acrylic Latex Paint', size: "4 liters", brand: "Davies", base: "Acrylic Water-Based", qty: 25, cat: 'Painting Supplies'},
    {id: 61, name: 'Cement', brand: "Phinma Corporation", type:"Low Heat Cement", cap: "300 Pounds", qty: 100, cat: 'Concreting and Masonry'},
    {id: 62, name: 'Hollow Blocks', brand: "Allied Concrete", type: "Partition block", cap: "1/2 inches", qty: 250, cat: 'Concreting and Masonry'},
    {id: 63, name: 'Magnesium Hand Floats', brand: "Marshalltwon", type: "Broken-In", qty: 30, cat: 'Concreting and Masonry'},
    {id: 64, name: 'Wheel Barrow', brand: "Creston", type: "Deep Type", qty: 10, cat: 'Concreting and Masonry'},
    {id: 65, name: 'Cement Mixer Manual', brand: "Phinma Corporation", type: "Pan Type Mixer", cap: "300 Pounds", qty: 7, cat: 'Concreting and Masonry'}
  ]

  constructor( private router:Router, public toastCtrl: ToastController) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['dashboard']);
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'Changes were saved successfully',
      duration: 3000,
      color: "success",
      position: 'top'
    });
  
  
    await toast.present();
  }

}
