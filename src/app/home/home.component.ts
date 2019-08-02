import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit }                 from '@angular/core';
import { fadeInLeft }                        from 'ng-animate';
import { HeaderService }                     from '../_layout/header/header.service';
import { TranslationService }                from '../shared/translation.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ],
    animations: [
        trigger('fadeInLeft', [ transition('* => *', useAnimation(fadeInLeft), {

            params: {

                timing: .6

            }

        }) ])
    ],
})
export class HomeComponent implements OnInit {

    public fadeInLeft: any;

    public constructor(private headerService: HeaderService,
                       public translationService: TranslationService) {

        headerService.showBack = false;

    }

    public ngOnInit() {
        alert('adjusting height');
        window.postMessage({"height": 900}, "*");
        window.parent.postMessage({"height": 900}, "*");
    }

}
