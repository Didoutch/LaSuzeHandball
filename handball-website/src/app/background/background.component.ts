import { Component,  EventEmitter,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  @Output() 
  arrowEvent= new EventEmitter<string>();



  constructor() { }

  ngOnInit(): void {
  }

  scroll(){
    this.arrowEvent.emit('arrow clicked');
  }
}
