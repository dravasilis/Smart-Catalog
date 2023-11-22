import { Component,Input,OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { HotelServiceService } from '../../services/contentService';
import { IContent } from '../../interfaces/IContent'; 
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
  buttons:string[] = this.service.buttons;
  catalogSelected = this.service.catalog;
  params = '';
  isSelected = ''; 
  category:IContent[] = this.service.category;
  receivedCatalog:string | null = '';
  //ONINIT
  ngOnInit(): void {   
      //Gia to refresh tou page 
      this.route.paramMap.subscribe(params =>{
        this.receivedCatalog = params.get('name'); 
        console.log(this.receivedCatalog)
        this.service.setCatalogSelected(this.receivedCatalog as string) 
        //!!!!prokalei console error alla douleuei!!!!!
        this.buttons = this.service.buttons
      }) 
      //mexri edw

      //default content
      this.service.setCategory(0);
      this.category = this.service.category;
      this.isSelected = this.buttons[0];

      //getting params
      this.route.queryParams.subscribe(params =>{
        this.params = params['place'];  
      })
      //arxikh timh params
      if(this.params == undefined){  
        this.params = this.buttons[0]; 
        this.router.navigate([`catalog/${this.catalogSelected}`],{
              queryParams: {
                place: this.isSelected
          }})
        }     
       
    // //getting params
    // this.route.queryParams.subscribe(params =>{
    //   this.params = params['place']; 
    // })
    // //arxikh timh params
    // if(this.params == undefined){  
    //   this.params = this.buttons[0]; 
    //   this.service.setCategory(0);
    //   this.category = this.service.category;
    // }     
    // //to button pou einai selected
    // if(this.service.params == ''){ 
    //   this.isSelected = this.params 
    //   this.router.navigate([`catalog/${this.catalogSelected}`],{
    //     queryParams: {
    //       place: this.isSelected
    //     }
    //   })   
    // }
    // else if(this.service.params !== ''){  
    //   this.isSelected = this.service.params  
    //   console.log('went int')
    //   //filter
    //   let filterCondition = (hotel: Hotel) => hotel.name === this.service.params; 
    //   let filteredGroup: Hotel[][] = this.service.hotels.map(item => item.filter(filterCondition))
    //   this.category = filteredGroup[1]
    //   console.log(filteredGroup[1])

    //   this.router.navigate([`catalog/${this.catalogSelected}`],{
    //     queryParams: {
    //       place: this.isSelected
    //     }
    //   })   
    // }
     
  }
  //button onClick
  onClick(index:number){ 
    this.service.setCategory(index);
    this.category = this.service.category;
    //setting params 
    if(this.catalogSelected){
      this.router.navigate([`catalog/${this.catalogSelected}`],{
        queryParams: {
          place: this.isSelected
        }
      }) 
    }
    //gia na fugei to console error sto button click otan kanw refresh
    else{
      this.router.navigate([`catalog/${this.receivedCatalog}`],{
        queryParams: {
          place: this.isSelected
        }
      }) 
    }
    
    this.service.setParams(this.route.snapshot.queryParams['place'])
  }
  //selected category
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
    else if(this.isSelected == this.buttons[2]){
      this.service.setSelected(this.category[index]);
      this.router.navigate([this.category[index].title], 
        {relativeTo: this.route,
         queryParams: currentParams
        })
    }
    else if(this.isSelected == this.buttons[3]){
      this.service.setSelected(this.category[index]);
      this.router.navigate([this.category[index].title], 
        {relativeTo: this.route,
         queryParams: currentParams
        })
    }
    else if(this.isSelected == this.buttons[4]){
      this.service.setSelected(this.category[index]);
      this.router.navigate([this.category[index].title], 
        {relativeTo: this.route,
         queryParams: currentParams
        })
    }
    else if(this.isSelected == this.buttons[5]){
      this.service.setSelected(this.category[index]);
      this.router.navigate([this.category[index].title], 
        {relativeTo: this.route,
         queryParams: currentParams
        })
    }
    else if(this.isSelected == this.buttons[6]){
      this.service.setSelected(this.category[index]);
      this.router.navigate([this.category[index].title], 
        {relativeTo: this.route,
         queryParams: currentParams
        })
    }
    else if(this.isSelected == this.buttons[7]){
      this.service.setSelected(this.category[index]);
      this.router.navigate([this.category[index].title], 
        {relativeTo: this.route,
         queryParams: currentParams
        })
    }
    else if(this.isSelected == this.buttons[8]){
      this.service.setSelected(this.category[index]);
      this.router.navigate([this.category[index].title], 
        {relativeTo: this.route,
         queryParams: currentParams
        })
    }
  }
}


