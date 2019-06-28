import { Component, OnInit } from '@angular/core';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';

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

  activeSlides: SlidesOutputData;

  slidesStore: any[];
  constructor() {
    this.slidesStore = [{
      img : '../../assets/slides/01.jpg',
      title : 'Kedarnath '
    },
    {
      img : '../../assets/slides/2.jpg',
      title : 'Badrinath '
    },
    {
      img : '../../assets/slides/3.jpg',
      title : 'Gangotri '
    },
    {
      img : '../../assets/slides/1.jpg',
      title : 'Yamnotri '
    },
    {
      img : '../../assets/slides/6.jpg',
      title : 'Gangasagar '
    },
    {
      img : '../../assets/slides/5.jpg',
      title : 'Amarnath '

    },
  ]
  }

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }
  ngOnInit(){
    
  }
}