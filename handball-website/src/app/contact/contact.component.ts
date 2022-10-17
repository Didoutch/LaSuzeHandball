import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
   
  }

  options: google.maps.MapOptions = {
    center: {lat: 40, lng: -20},
    zoom: 4
  };

}
