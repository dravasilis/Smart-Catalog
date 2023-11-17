import { Component, EventEmitter, Output } from '@angular/core';
import { Language } from '../interfaces/language';

@Component({
  selector: 'app-lang-dropdown',
  templateUrl: './lang-dropdown.component.html',
  styleUrls: ['./lang-dropdown.component.css']
})
export class LangDropdownComponent {
  @Output()
  optionSelected= new EventEmitter<string>() 
  
  selectedOption = '';
  isOpen = false;

  options:Language []= [{
    image: 'https://sc-mobile.web.app/flags/gb.png',
    lang: 'English'
  },
  {
    image: 'https://sc-mobile.web.app/flags/bg.png',
    lang: 'Bulgarian'
  },
  {
    image: 'https://sc-mobile.web.app/flags/de.png',
    lang: 'Deutsch'
  },
  {
    image: 'https://sc-mobile.web.app/flags/gr.png',
    lang: 'Ελληνικά'
  },
  {
    image: 'https://sc-mobile.web.app/flags/fi.png',
    lang: 'Suomi'
  },
  {
    image: 'https://sc-mobile.web.app/flags/it.png',
    lang: 'Italiano'
  },
  {
    image: 'https://sc-mobile.web.app/flags/ru.png',
    lang: 'Russian'
  },
  {
    image: 'https://sc-mobile.web.app/flags/tr.png',
    lang: 'Russian'
  }
]

  dropdownSelect(event: string){ 
    //update selected language
    this.options.forEach(object => object.lang === event ? this.selectedOption = object.image : null)
    this.isOpen = false;
    this.optionSelected.emit(this.selectedOption);
  } 
}
