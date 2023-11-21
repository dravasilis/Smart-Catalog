import { Component, OnInit, Output, OnDestroy, EventEmitter } from '@angular/core';
import { Hotel } from 'src/app/interfaces/hotel';
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
      this.service.setParams(this.route.snapshot.queryParams['place'])  
    }
  selected:Hotel | null = this.service.selected; 
}
