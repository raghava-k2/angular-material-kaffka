import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'table-grid',
    templateUrl: './tableView.html'
})
export default class TableGrid implements OnChanges {
    @Input() columns: Array<any> = []
    @Input() data: Array<any> = []
    private emptyMsg: String = "No Records in Grid"
    ngOnChanges() {
        console.log('onchange of table', this)
    }
}