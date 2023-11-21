import { Component, OnInit, Output, OnDestroy, EventEmitter } from '@angular/core';
import { Hotel } from 'src/app/interfaces/hotel';
import { HotelServiceService } from 'src/app/services/hotel-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-selected-option',
  templateUrl: './selected-option.component.html',
  styleUrls: ['./selected-option.component.css']
})
export class SelectedOptionComponent implements OnDestroy{
  constructor(
      private hotelService:HotelServiceService ,
      private route: ActivatedRoute
    ){ }  
    ngOnDestroy(): void {
      this.hotelService.setParams(this.route.snapshot.queryParams['place'])  
    }
  selected:Hotel | null = this.hotelService.selected; 
}
