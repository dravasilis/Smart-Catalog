import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelServiceService } from '../../services/contentService';
import { Hotel } from '../../interfaces/hotel'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-the-hotel',
  templateUrl: './the-hotel.component.html',
  styleUrls: ['./the-hotel.component.css']
})
export class TheHotelComponent implements OnInit{ 
  constructor(private router:Router,
              private service: HotelServiceService,
              private route: ActivatedRoute
    ){   } 

  //VARIABLES
  buttons:string[] = this.service.buttons;;
  catalogSelected = this.service.catalog;
  params = '';
  isSelected = ''; 
  category:Hotel[] = this.service.category;
  
  //ONINIT
  ngOnInit(): void {   
    if(this.category.length === 0){
      this.service.setCategory(0);
      this.category = this.service.category;
    }
    
    //getting params
    this.route.queryParams.subscribe(params =>{
      this.params = params['place'];
    })
    //arxikh timh params
    if(this.params == undefined){ 
      this.params = this.buttons[0]; 
    }     
    //to button pou einai selected
    if(this.service.params == ''){
      this.isSelected = this.params 
      this.router.navigate([`catalog/${this.catalogSelected}`],{
        queryParams: {
          place: this.isSelected
        }
      })   
    }
    else if(this.service.params !== ''){ 
      this.isSelected = this.service.params
      this.router.navigate([`catalog/${this.catalogSelected}`],{
        queryParams: {
          place: this.isSelected
        }
      })  
    }
     
  }
  onClick(index:number){ 
    this.service.setCategory(index);
    this.category = this.service.category;
    console.log(this.category)
    //setting params
    this.router.navigate([`catalog/${this.catalogSelected}`],{
      queryParams: {
        place: this.isSelected
      }
    })  
    this.service.setParams(this.route.snapshot.queryParams['place'])
  }
  setSelected(index:number){ 
    //current url parameters
    const currentParams = this.route.snapshot.queryParams;

    if(this.isSelected == this.buttons[0]){
      this.service.setSelected(this.category[index])  
        this.router.navigate([this.category[index].title], 
          {relativeTo: this.route,
           queryParams: currentParams
          })
    }
    else if(this.isSelected == this.buttons[1]){
      this.service.setSelected(this.category[index]);
      this.router.navigate([this.category[index].title], 
        {relativeTo: this.route,
         queryParams: currentParams
        })
    }
  }
}


