import {ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { NgModule } from "@angular/core";
import {RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home.routing.module';
import { CommonModule } from '@angular/common';
import { BaseGiuridicaComponent } from '../base-giuridica/base-giuridica.component';
import { HeaderComponent } from '../header/header.component';


@NgModule({
    declarations:[
        HomeComponent,
        HeaderComponent,
        BaseGiuridicaComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        HomeRoutingModule
    ]
})

export class HomeModule{}