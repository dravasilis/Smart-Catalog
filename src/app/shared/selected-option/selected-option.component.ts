import { Component, OnInit, Output, OnDestroy, EventEmitter } from '@angular/core';
import { IContent } from 'src/app/interfaces/IContent';
import { HotelServiceService } from 'src/app/services/contentService';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-selected-option',
  templateUrl: './selected-option.component.html',
  styleUrls: ['./selected-option.component.css']
})
export class SelectedOptionComponent implements OnDestroy{
  constructor(
      private service:HotelServiceService ,
      private route: ActivatedRoute
    ){ }  
    ngOnDestroy(): void { 


    }
  selected:IContent | null = this.service.selected; 
}
