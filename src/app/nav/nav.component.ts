import { Component } from '@angular/core'; 

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent { 
  selectedOption = 'https://sc-mobile.web.app/flags/gb.png';
  
  logOption(event: string){
    this.selectedOption = event;
  }
}
