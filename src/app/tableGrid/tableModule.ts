import { NgModule } from "@angular/core"
import TableGrid from "./TableGrid"
import ObjectKeys from './ObjectKeys'
import { CommonModule } from "@angular/common"

@NgModule({
    declarations: [TableGrid, ObjectKeys],
    exports: [TableGrid],
    imports: [CommonModule]
})
export class TableModule {

}