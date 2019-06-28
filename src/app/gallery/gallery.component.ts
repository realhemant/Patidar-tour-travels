import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*	gallery */
$(document).ready(function(){

  $(".filter-button").click(function(){
    // alert('dddddddddddddddddddd')
      var value = $(this).attr('data-filter');
      
      if(value == "all")
      {
          $('.filter').show('1000');
      }
      else
      {
          $(".filter").not('.'+value).hide('1000');
          $('.filter').filter('.'+value).show('1000');
          
      }

          if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
      }
        $(this).addClass("active");
      });
});
/*	end gallery */

$(document).ready(function(){
  $(".fancybox").fancybox({
      openEffect: "none",
      closeEffect: "none"
  });
});
 

  }

}
