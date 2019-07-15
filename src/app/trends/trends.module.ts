import {CommonModule}                     from '@angular/common';
import {NgModule}                         from '@angular/core';
import {RouterModule}                     from '@angular/router';
import {SharedModule}                     from '../shared/shared.module';
import {IntroComponent}                   from './content/intro/intro.component';
import {Trend1Component}                  from './content/trend1/trend1.component';
import {Trend2Component}                  from './content/trend2/trend2.component';
import {Trend3Component}                  from './content/trend3/trend3.component';
import {Trend4Component}                  from './content/trend4/trend4.component';
import {TrendDownloadComponent}           from './trend-download/trend-download.component';
import {TrendFooterComponent}             from './trend-footer/trend-footer.component';
import {TrendHeaderComponent}             from './trend-header/trend-header.component';
import {TrendShareComponent}              from './trend-share/trend-share.component';
import {TrendsComponent}                  from './trends.component';
import {TrendHorizontalExpanderComponent} from './trend-horizontal-expander/trend-horizontal-expander.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatExpansionModule, MatIconModule } from '@angular/material';
import { TrendCardComponent } from './trend-card/trend-card.component';

@NgModule({

    declarations: [

        TrendsComponent,

        IntroComponent,

        TrendHeaderComponent,
        TrendShareComponent,
        TrendDownloadComponent,
        TrendFooterComponent,
        Trend1Component,
        Trend2Component,
        Trend3Component,
        Trend4Component,
        TrendHorizontalExpanderComponent,
        TrendCardComponent

    ],
    imports: [

        CommonModule,
        MatIconModule,        
        FlexLayoutModule,
        RouterModule.forChild([

            {

                path: 'trends/intro',
                component: IntroComponent

            }, {

                path: 'trends/1',
                component: Trend1Component

            }, {

                path: 'trends/2',
                component: Trend2Component

            }, {

                path: 'trends/3',
                component: Trend3Component

            }, {

                path: 'trends/4',
                component: Trend4Component

            }

        ]),
        SharedModule,

    ]

})
export class TrendsModule {
}
