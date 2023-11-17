import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './catalog_info.component.html',
  styleUrls: ['./catalog_info.component.css']
})
export class CatalogInfoComponent implements OnInit{
  id = '';
  constructor(private route: ActivatedRoute,
              private router: Router
    ){ }
    
  ngOnInit(): void {
    //this.id = this.route.snapshot.params['id'] 
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    })
  } 
}
