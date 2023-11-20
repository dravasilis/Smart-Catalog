import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 

import { NgSelectModule } from '@ng-select/ng-select';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { CatalogInfoComponent } from './catalog_info/catalog_info.component';
import { LangDropdownComponent } from './lang-dropdown/lang-dropdown.component';
import { TheHotelComponent } from './the-hotel/the-hotel.component';
import { MenuComponent } from './menu/menu.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { SpiritsComponent } from './spirits/spirits.component';
import { ButtonComponent } from './shared/button/button.component';
import { SelectedOptionComponent } from './shared/selected-option/selected-option.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CatalogsComponent,
    CatalogInfoComponent,
    LangDropdownComponent,
    TheHotelComponent,
    MenuComponent,
    BeveragesComponent,
    SpiritsComponent,
    ButtonComponent,
    SelectedOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
