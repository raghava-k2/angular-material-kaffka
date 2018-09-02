import { NgModule } from "@angular/core";
import Messages from './messages.component'
import { CommonModule } from "@angular/common";
import TableGrid from "../tableGrid/TableGrid";

@NgModule({
    declarations: [Messages],
    imports: [CommonModule, TableGrid],
    exports: [Messages]
})
export default class MessagesModule {

}