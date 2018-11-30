import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: "./home.component.html",
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  public title = 'autobot';



  constructor() { }


  ngOnInit() {

  }


}



/*
    template: `
  <header class="hero">
    <div class="hero-body has-text-centered">
      <h1 class="title"> Welcome to {{title}} </h1>
      <h2 class="subtitle"> Version: {{subtitle}} </h2>
      <a target="_blank" rel="noopener" href="https://academia-binaria.com/">
        <img width="100" src="./assets/logo.png">
      </a>
    </div>
  </header>
  <aside class="menu">
    <p class="menu-label">
      Cars in your garage
    </p>
    <ul class="menu-list">
      <li><a [routerLink]="['/car', 'Model S']">Model S</a></li>
      <li><a [routerLink]="['/car', 'Model X']">Model X</a></li>
      <li><a [routerLink]="['/car', 'Model 3']">Model 3</a></li>
      <li><a [routerLink]="['/car', 'Roadster']">Roadster</a></li>
    </ul>
  </aside>
  `,
*/