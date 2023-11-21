import { Component } from '@angular/core';
import { Catalog } from '../interfaces/catalog';
import { HotelServiceService } from '../services/contentService';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css']
})
export class CatalogsComponent {
  constructor(
    private service: HotelServiceService
  ){ }
  catalogs:Catalog []= [{
    image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/catalogues%2F__business_legacy_39%2F1582201520688_the%20hotel.jpg?alt=media&token=d247540f-f334-4571-a73a-3d0648fa2aab',
    title:'THE HOTEL',
    id: '1'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_catalogue_162.jpg?alt=media',
    title: 'MENU',
    id: '2'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_catalogue_164.jpg?alt=media',
    title: 'BEVERAGES',
    id: '3'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_catalogue_163.jpg?alt=media',
    title: 'WINES/COCKTAILS/SPIRITS',
    id: '4'
  }]
  onClick(catalog:string){
    this.service.setCatalogSelected(catalog)
  }
}
