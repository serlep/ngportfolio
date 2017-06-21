import { Component, OnInit , HostListener} from '@angular/core';
import $ from 'jquery/dist/jquery';
import { MdTooltipModule } from '@angular/material';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('myAnimation',[

      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(2)',
      })),

      transition('small <=> large', animate('300ms ease-in')),
    ]),

    trigger('myAwesomeAnimation', [
      transition('void => *', [
        animate(2500, keyframes([
            style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
            style({opacity: 1, transform: 'translateY(15px)', offset: .5}),
            style({opacity: 1, transform: 'translateY(10px)', offset: .7}),
            style({opacity: 1, transform: 'translateY(0%)', offset: 1}),
        ]))
      ])
    ]),
    trigger('buttonAnimation', [
      transition('void => *', [
        animate(2500, keyframes([
        style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
        style({opacity: 1, transform: 'translateY(15px)', offset: .5}),
        style({opacity: 1, transform: 'translateY(10px)', offset: .7}),
        style({opacity: 1, transform: 'translateY(0%)', offset: 1}),
        ]))
      ])
    ])
  ]

})

export class AboutComponent implements OnInit {
  constructor() {
  }

  ngOnInit(){
  }
  @HostListener('window:scroll', ['$event'])
    onScrollEvent($event){
      var top = $(window).scrollTop();
      if( top > 318 ){
        $('#cptheading').animate({ 'margin-left': '0'});
      }
      if( top > 380 ){
        $('#cptpara').animate({ 'margin-left': '0', 'opacity': '1'});
      }
      if( top > 400 ){
        var img = $('.competance').children('img');
        for (var i = 0; i < img.length; i++){
          $(img[i]).delay(i*200).animate({ 'margin-top' : '0','opacity': '1'});
        }
      }
      if( top > 600 ){
        $('.cv').animate({ 'margin-left' : '0', 'opacity': '1'});
      }
    }

  play(){
    $('#player')[0].play();
    $('.fa').removeClass('fa-play');
    $('.fa').addClass('fa-pause');
    setTimeout(this.pause, 4000);
  }
  pause(){
    $('.fa').removeClass('fa-pause');
    $('.fa').addClass('fa-play');
  }
  state: string = 'small';

  animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small');
  }


}
