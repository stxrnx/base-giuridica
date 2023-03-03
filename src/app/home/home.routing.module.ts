import { HeaderComponent } from './../header/header.component';
import { HomeComponent } from './home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BaseGiuridicaComponent } from '../base-giuridica/base-giuridica.component';

const routes: Routes = [
    {path: '',component: HomeComponent, children:[
        {path:'base-sub-giuridica', component: BaseGiuridicaComponent, children:[
            {path:'header', component: HeaderComponent}
        ]},
    ]},
    {path:'' , pathMatch:'full', redirectTo:'/'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule { }