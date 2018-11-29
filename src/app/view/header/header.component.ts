import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: "./header.component.html",
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public title = 'autobot';
    public version = '2-spa';
    public tag = '2.0.0';

    constructor(

    ) {
    }

    ngOnInit() {

    }
}
