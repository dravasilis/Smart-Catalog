import { Injectable,OnInit,OnDestroy } from '@angular/core';
import { Hotel } from '../interfaces/hotel';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService{

  constructor(
    private route: ActivatedRoute
  ) { }
  selected:Hotel | null = null;
  params = '';
  catalog = '';
  buttons:string[] = []; 
  category: Hotel[] = [];
  //THE HOTEL
  private hotelButtons = ['Halkidiki','Hotel Melissanthi']
  private menuButtons = ['adadsad','asdasdasd']
  hotels:Hotel[][] = [
      [{
      name: 'Halkidiki',
      image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582206065805_product.jpg?alt=media&token=f37367b5-50c9-4087-9127-b5ea7384c5ea',
      title: 'Map'
    },
    {
      name: 'Halkidiki',
      image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582205702041_product.jpg?alt=media&token=e324a934-2c43-4ee3-a5ff-3bb41e7f44e6',
      title: 'Beach Bars'
    },
    {
      name: 'Halkidiki',
      image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582206110037_product.jpg?alt=media&token=907b3bf0-f30f-4451-b107-856cb2fb867c',
      title: 'Events-Concerts-Theatre',
      subtitle: 'Sani JAZZ festival 10-20 June'
    }],
     [{
      name: 'Hotel Melissanthi',
      image:'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582205568707_product.jpg?alt=media&token=4ed00dd0-22fd-42b7-995f-fc0a0e91dfa6',
      title:'Activities for children',
      subtitle: 'Theatre for kids everyday 19.00 a.m.'
    },
    {
      name: 'Hotel Melissanthi',
      image:'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582205494334_product.jpg?alt=media&token=97bd1571-4df7-4ca3-9bdf-43a475809e27',
      title:'Fitness Activities',
      subtitle: 'Everyday Yoga 10 a.m.'
    },
    {
      name: 'Hotel Melissanthi',
      image:'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582205474033_product.jpg?alt=media&token=ee2a2f89-c6c5-4d89-9f2c-94f01d3b873d',
      title:'Beach'
    }] 
  ]
  hotels2:Hotel[][] =[
    [
      {
        name: 'sadasdasdi',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582206065805_product.jpg?alt=media&token=f37367b5-50c9-4087-9127-b5ea7384c5ea',
        title: 'Msadasdasdp'
      },
      {
        name: 'Hasdasdasdi',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582205702041_product.jpg?alt=media&token=e324a934-2c43-4ee3-a5ff-3bb41e7f44e6',
        title: 'Bsadasdrs'
      },
      {
        name: 'Hasadasdki',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582206110037_product.jpg?alt=media&token=907b3bf0-f30f-4451-b107-856cb2fb867c',
        title: 'Eventasdasdsadasds-Theatre',
        subtitle: 'Saasdasdtival 10-20 June'
      }],
       [{
        name: 'Hotelasdas',
        image:'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582205568707_product.jpg?alt=media&token=4ed00dd0-22fd-42b7-995f-fc0a0e91dfa6',
        title:'Activisad',
        subtitle: 'Theaasddsaeryday 19.00 a.m.'
      },
      {
        name: 'Hotel sad',
        image:'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582205494334_product.jpg?alt=media&token=97bd1571-4df7-4ca3-9bdf-43a475809e27',
        title:'Fitness Activities',
        subtitle: 'Everyday Yoga 10 a.m.'
      },
      {
        name: 'Hotel Masdsad',
        image:'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582205474033_product.jpg?alt=media&token=ee2a2f89-c6c5-4d89-9f2c-94f01d3b873d',
        title:'Basdasdasdch'
      }] 
    ]
  
   
 
  setSelected(selected:Hotel){
    this.selected = selected; 
  }
  setParams(params:string){
    this.params = params;
  } 
  setCatalogSelected(catalog:string){
    this.catalog = catalog;
    if(catalog === 'THE HOTEL'){
      this.buttons = this.hotelButtons
    }
    else if(catalog === 'MENU'){
      this.buttons = this.menuButtons
    }
  }
  setCategory(index:number){
    if(this.catalog === 'THE HOTEL'){
      this.category = this.hotels[index];
    }
    if(this.catalog === 'MENU'){
       this.category = this.hotels2[index]
    }
   
  }
}
