import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fadeInLeft } from 'ng-animate';
import { HeaderService } from '../_layout/header/header.service';
import { TranslationService } from '../shared/translation.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft), {

            params: {

                timing: .6

            }

        })])
    ],
})
export class HomeComponent implements AfterViewInit {

    public fadeInLeft: any;
    @ViewChild('content', { static: false })
    elementView: ElementRef;

    public constructor(private headerService: HeaderService,
        public translationService: TranslationService) {

        headerService.showBack = false;

    }

    ngAfterViewInit() {
        var height = this.elementView.nativeElement.offsetHeight;

        console.log("Height: " + height);
        window.parent.postMessage({ "height": height }, "*");
    }

}
