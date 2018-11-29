import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MainComponent } from '../main/main.component';
import { NavigatorComponent } from './core.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, RouterModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule],
    declarations: [NavigatorComponent, HeaderComponent, MainComponent],
    exports: [NavigatorComponent]
})
export class CoreModule { } 
