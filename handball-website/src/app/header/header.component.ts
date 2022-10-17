import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  active(event: any){
    const elements = Array.from(document.querySelectorAll('.item'));
    elements.forEach(element => {
      element.classList.remove('active');
    });
    event.target.classList.add('active');
   
    
  }

}
