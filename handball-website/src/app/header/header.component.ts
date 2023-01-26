import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeHeader: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.router.events.forEach(e => {
      if (e instanceof NavigationEnd) {
        console.log(this.route?.root?.firstChild?.snapshot.data?.['idHeader']);
        this.activeHeader = this.route?.root?.firstChild?.snapshot.data?.['idHeader'];
      }
    });
   
  }

  active(event: any){
    const elements = Array.from(document.querySelectorAll('.item'));
    elements.forEach(element => {
      element.classList.remove('active');
    });
    event.target.classList.add('active');
   
    
  }

}
