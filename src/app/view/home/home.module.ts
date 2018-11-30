import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './index/home.component';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        ModalModule.forRoot()
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }
