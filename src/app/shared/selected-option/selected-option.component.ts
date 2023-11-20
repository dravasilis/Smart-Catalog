import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/interfaces/hotel';
import { HotelServiceService } from 'src/app/services/hotel-service.service';


@Component({
  selector: 'app-selected-option',
  templateUrl: './selected-option.component.html',
  styleUrls: ['./selected-option.component.css']
})
export class SelectedOptionComponent{
  constructor(private hotelService:HotelServiceService){ }
 
  selected:Hotel | null = this.hotelService.selected;
}
