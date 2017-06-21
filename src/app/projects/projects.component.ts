import { Component, OnInit, HostListener} from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    $('.firstblog').animate({ 'margin-top' : '0', 'opacity' : '1'});
    $('.left').animate({ 'margin-left': '0', 'opacity' : '1'});
    $('.right').delay(900).animate({ 'margin-right': '0', 'opacity' : '1'});
    $('.secondblog').delay(900).animate({ 'margin-top': '0', 'opacity': '1'});
  }
  @HostListener('window:scroll', ['$event'])
    onScrollEvent($event){
      var top = $(window).scrollTop();

      if( top > 100 ){

      }
    }
}
