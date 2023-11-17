import { Component } from '@angular/core';

@Component({
  selector: 'app-the-hotel',
  templateUrl: './the-hotel.component.html',
  styleUrls: ['./the-hotel.component.css']
})
export class TheHotelComponent { 
  isSelected = 'Halkidiki';
  buttons=['Halkidiki','Hotel Melissanthi'];
  menu = [{
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
}


