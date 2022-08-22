import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss']
})
export class CarousselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logoPartenaires: Array<object> = [{
    thumbImage: '../../assets/img/logo_team-pulse.svg',
}, {
    thumbImage: '../../assets/img/logo_team-pulse.svg',
},
{
  thumbImage: '../../assets/img/logo_team-pulse.svg',
}, {
  thumbImage: '../../assets/img/logo_team-pulse.svg',
},{
  thumbImage: '../../assets/img/logo_team-pulse.svg',
}, {
  thumbImage: '../../assets/img/logo_team-pulse.svg',
},{
  thumbImage: '../../assets/img/logo_team-pulse.svg',
}, {
  thumbImage: '../../assets/img/logo_team-pulse.svg',
}
];
   
}
