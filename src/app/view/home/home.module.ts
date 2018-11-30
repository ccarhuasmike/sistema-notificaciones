import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './index/home.component';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }
