import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([],
            { enableTracing: false, useHash: true }
        )
    ], exports: [RouterModule]
})
export class AppRouter { }