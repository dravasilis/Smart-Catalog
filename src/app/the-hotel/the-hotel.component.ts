import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelServiceService } from '../services/hotel-service.service';
import { Hotel } from '../interfaces/hotel'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-the-hotel',
  templateUrl: './the-hotel.component.html',
  styleUrls: ['./the-hotel.component.css']
})
export class TheHotelComponent implements OnInit{ 
  constructor(private router:Router,
              private hotelService: HotelServiceService,
              private route: ActivatedRoute
    ){   } 

  //VARIABLES
  buttons=['Halkidiki','Hotel Melissanthi'];
  params = '';
  isSelected = 'Halkidiki';
 
  Halkidiki:Hotel[] = this.hotelService.Halkidiki;
  Melissanthi:Hotel[] = this.hotelService.Melissanthi;
  
  ngOnInit(): void { 
    //getting params
    this.route.queryParams.subscribe(params =>{
      this.params = params['place'];
    })
    //arxikh timh param
    if(this.params == undefined){
      this.params = 'Halkidiki';
      this.router.navigate(['catalog/1'],{
        queryParams: {
          place: this.isSelected
        }
      })  
    }   
    this.isSelected = this.params 
  }
  onClick(){ 
    //setting params
    this.router.navigate(['catalog/1'],{
      queryParams: {
        place: this.isSelected
      }
    })  
  }
  setSelected(index:number){
    console.log(index)
    if(this.isSelected == 'Halkidiki'){
      this.hotelService.setSelected(this.Halkidiki[index]) 
      this.router.navigateByUrl(`/catalog/1/Halkidiki/${this.Halkidiki[index].title}`)
    }
    else if(this.isSelected == 'Hotel Melissanthi'){
      this.hotelService.setSelected(this.Melissanthi[index]);
      this.router.navigateByUrl(`/catalog/1/Halkidiki/${this.Halkidiki[index].title}`)
    }
  }
}


