import { NgModule } from "@angular/core";
import HomePage from './homePage.component'
import { CommonModule } from "@angular/common";
@NgModule({
    declarations: [HomePage],
    imports: [CommonModule],
    exports: [HomePage]
})
export default class HomePageModule {

}