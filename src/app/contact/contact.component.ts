import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: number = 48.8424303;
  lng: number = 2.3246378;
  zoom: number = 13;

  constructor() {

  }

  ngOnInit() {
  }
}
