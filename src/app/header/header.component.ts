import { Component, HostListener} from '@angular/core';
import $ from 'jquery/dist/jquery';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event){
    $(window).scrollTop() === ($(window).scrollTop() > 0 ? $('#navbar').addClass('navbgchange') : $('#navbar').removeClass('navbgchange'))
  }
}
