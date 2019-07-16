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
import { MatIconModule, MatButtonModule } from '@angular/material';
import { TrendCardComponent } from './trend-card/trend-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        MatButtonModule,     
        FlexLayoutModule,
        BrowserAnimationsModule,
        RouterModule.forChild([

            {

                path: 'trends/Introduction',
                component: IntroComponent

            }, {

                path: 'trends/01-PLAYING-THE-SPECTRUM-OF-DISRUPTION',
                component: Trend1Component

            }, {

                path: 'trends/02-INNOVATE-ON-DOMINANT-ARCHITECTURES',
                component: Trend2Component

            }, {

                path: 'trends/03-BEYOND-DIGITAL-DISCONTENT',
                component: Trend3Component

            }, {

                path: 'trends/04-FOCUS-ON-STELLAR-AI-FUNDAMENTALS',
                component: Trend4Component

            }

        ]),
        SharedModule,

    ]

})
export class TrendsModule {
}
