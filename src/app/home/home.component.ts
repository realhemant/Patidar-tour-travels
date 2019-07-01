import { Component, OnInit } from '@angular/core';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  customOptionsB: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  }

  activeSlides: SlidesOutputData;
  activeSlidesB: SlidesOutputData;

  slidesStore: any[];
  constructor(public router :Router) {
    this.slidesStore = [{
      img : 'https://iamnavino.github.io/Patidar-tour-travels/assets/slides/01.jpg',
      title : 'Kedarnath '
    },
    {
      img : 'https://iamnavino.github.io/Patidar-tour-travels/assets/slides/2.jpg',
      title : 'Badrinath '
    },
    {
      img : 'https://iamnavino.github.io/Patidar-tour-travels/assets/slides/3.jpg',
      title : 'Gangotri '
    },
    {
      img : 'https://iamnavino.github.io/Patidar-tour-travels/assets/slides/1.jpg',
      title : 'Yamnotri '
    },
    {
      img : 'https://iamnavino.github.io/Patidar-tour-travels/assets/slides/6.jpg',
      title : 'Gangasagar '
    },
    {
      img : 'https://iamnavino.github.io/Patidar-tour-travels/assets/slides/5.jpg',
      title : 'Amarnath '

    },
  ]
  }

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }
  getPassedDataB(data: SlidesOutputData) {
    this.activeSlidesB = data;
    console.log(this.activeSlidesB);
  }
  ngOnInit(){
    
  }

  // Route Navigate
  goToContact(){
    this.router.navigate(['contact'])
  }
}