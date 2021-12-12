import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';


import { ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  imagenes:any[]=[
    {name:'casa bogota',
    img:'assets/casa1.jpg',
    desc:'casa bogota'},
    {
      name:'FINCA MEDELLIN',
      img:'assets/casa1.png',
      desc:'FINCA MEDELLIN'
    }
  ];


  constructor(private _config: NgbCarouselConfig){
    _config.interval = 1000;
    _config.pauseOnHover = true;

  }


    ngOnInit(): void {
  }

}
