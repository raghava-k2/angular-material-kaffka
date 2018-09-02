import { NgModule } from "@angular/core";
import HomePage from './homePage.component'
import { CommonModule } from "@angular/common";
import { NavBar } from "./navBar/navBar.component";
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from "@angular/router";
import { HomePageContent } from "./hoePageContent/homePageContent.component";
@NgModule({
    declarations: [HomePage,NavBar,HomePageContent],
    imports: [CommonModule,MatButtonModule,RouterModule.forChild([  {
        path: 'home',
        component: HomePageContent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }])],
    exports: [HomePage]
})
export default class HomePageModule {}