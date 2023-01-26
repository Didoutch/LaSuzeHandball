import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  @ViewChild('card') card: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  addHoverContact(){
    this.card.nativeElement.classList.add('hoverContact');
  }

  removeHoverContact(){
    this.card.nativeElement.classList.remove('hoverContact');
  }
}
