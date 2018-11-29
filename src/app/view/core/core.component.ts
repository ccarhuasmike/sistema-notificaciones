import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigator',
    template: `
    <app-header ></app-header>    
    <app-main></app-main>    
  `,
    styles: []
})
export class NavigatorComponent implements OnInit {
    constructor(
    ) { }

    ngOnInit() {

    }
}
