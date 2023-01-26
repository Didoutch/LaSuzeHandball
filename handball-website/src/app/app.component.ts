import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  activeHeader: number = 0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    if(window.innerWidth > 768){
      document.body.classList.add('desktop');
    }else{
      document.body.classList.add('mobile');
    }

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        console.log(e.url);
      }
    });
    console.log(this.activatedRoute.snapshot.data['idHeader']);

  }
}
