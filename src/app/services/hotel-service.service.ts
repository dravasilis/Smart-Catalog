import { Injectable,OnInit } from '@angular/core';
import { Hotel } from '../interfaces/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService  {

  constructor() { }

  selected:Hotel | null = null;
  

  Halkidiki:Hotel[] = [{
    image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582206065805_product.jpg?alt=media&token=f37367b5-50c9-4087-9127-b5ea7384c5ea',
    title: 'Map'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582205702041_product.jpg?alt=media&token=e324a934-2c43-4ee3-a5ff-3bb41e7f44e6',
    title: 'Beach Bars'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582206110037_product.jpg?alt=media&token=907b3bf0-f30f-4451-b107-856cb2fb867c',
    title: 'Events-Concerts-Theatre'
  }];
   
  Melissanthi = [{
    image:'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582205568707_product.jpg?alt=media&token=4ed00dd0-22fd-42b7-995f-fc0a0e91dfa6',
    title:'Activities for children'
  },
  {
    image:'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582205494334_product.jpg?alt=media&token=97bd1571-4df7-4ca3-9bdf-43a475809e27',
    title:'Fitness Activities'
  },
  {
    image:'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582205474033_product.jpg?alt=media&token=ee2a2f89-c6c5-4d89-9f2c-94f01d3b873d',
    title:'Beach'
  }] 
  setSelected(selected:Hotel){
    this.selected = selected; 
  }
}
