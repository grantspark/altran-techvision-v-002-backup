import { HttpClientModule }          from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';
import { BrowserAnimationsModule }   from '@angular/platform-browser/animations';
import { RouterModule }              from '@angular/router';
import { HeaderComponent }           from './_layout/header/header.component';
import { FlexLayoutModule }          from '@angular/flex-layout';


import { AppComponent }       from './app.component';
import { HomeModule }         from './home/home.module';
import { TranslationService } from './shared/translation.service';
import { TrendsModule }       from './trends/trends.module';

export function setupTranslationFactory(service: TranslationService): Function {
    return () => service.use('en');    
}

@NgModule({
    declarations: [

        AppComponent,
        HeaderComponent

    ],
    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        HomeModule,
        HttpClientModule,
        RouterModule.forRoot([]),
        TrendsModule

    ],
    providers: [

        {

            provide: APP_INITIALIZER,
            useFactory: setupTranslationFactory,
            deps: [

                TranslationService

            ],
            multi: true

        }

    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
