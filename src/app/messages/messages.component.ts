import { Component } from "@angular/core";

@Component({
    selector: 'message',
    templateUrl: './messages.component.html'
})
export default class Messages {
    gridColumns = ['sno', 'name', 'Address']
    gridData: Array<Object> = []
    constructor() {
        for (let i = 0; i < 100; i++) {
            this.gridData.push({ sno: i, name: `raghava${i}`, address: `some addres ${i}` })
        }
    }
}