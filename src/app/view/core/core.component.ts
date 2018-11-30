import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigator',
    template: `
    <div class="ch-container">
        <app-header ></app-header>    
        <app-main></app-main>  
    </div>  
  `,
    styles: []
})
export class NavigatorComponent implements OnInit {
    constructor(
    ) { }

    ngOnInit() {

    }
}
