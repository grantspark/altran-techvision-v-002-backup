import {CommonModule}                                                           from '@angular/common';
import {NgModule}                                                               from '@angular/core';
import {ReactiveFormsModule}                                                    from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({

    declarations: [],

    imports: [

        CommonModule,

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,

        ReactiveFormsModule,

    ],
    exports: [

        CommonModule,

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,

        ReactiveFormsModule,

    ]

})
export class SharedModule {
}
