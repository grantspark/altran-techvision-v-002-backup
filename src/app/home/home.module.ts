import {CommonModule}   from '@angular/common';
import {NgModule}       from '@angular/core';
import {RouterModule}   from '@angular/router';
import {SharedModule}   from '../shared/shared.module';
import {HomeComponent}  from './home.component';
import {TrendComponent} from './trend/trend.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({

    declarations: [

        HomeComponent,
        TrendComponent,

    ],
    imports: [

        CommonModule,
        FlexLayoutModule,
        RouterModule.forChild([

            {

                path: '',
                pathMatch: 'full',
                component: HomeComponent

            }

        ]),
        SharedModule,

    ]

})
export class HomeModule {
}
