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
  isSelected = '';
  Halkidiki:Hotel[] = this.hotelService.Halkidiki;
  Melissanthi:Hotel[] = this.hotelService.Melissanthi;
  
  //ONINIT
  ngOnInit(): void {  
    //getting params
    this.route.queryParams.subscribe(params =>{
      this.params = params['place'];
    })
    //arxikh timh params
    if(this.params == undefined){ 
      this.params = 'Halkidiki'; 
    }     
    //to button pou einai selected
    if(this.hotelService.params == ''){
      this.isSelected = this.params 
      this.router.navigate(['catalog/1'],{
        queryParams: {
          place: this.isSelected
        }
      })   
    }
    else if(this.hotelService.params !== ''){ 
      this.isSelected = this.hotelService.params
      this.router.navigate(['catalog/1'],{
        queryParams: {
          place: this.isSelected
        }
      })  
    }
     
  }
  onClick(){ 
    //setting params
    this.router.navigate(['catalog/1'],{
      queryParams: {
        place: this.isSelected
      }
    })  
    this.hotelService.setParams(this.route.snapshot.queryParams['place'])
  }
  setSelected(index:number){ 
    //current url parameters
    const currentParams = this.route.snapshot.queryParams;

    if(this.isSelected == 'Halkidiki'){
      this.hotelService.setSelected(this.Halkidiki[index])  
        this.router.navigate([this.Halkidiki[index].title], 
          {relativeTo: this.route,
           queryParams: currentParams
          })
    }
    else if(this.isSelected == 'Hotel Melissanthi'){
      this.hotelService.setSelected(this.Melissanthi[index]);
      this.router.navigate([this.Melissanthi[index].title], 
        {relativeTo: this.route,
         queryParams: currentParams
        })
    }
  }
}


