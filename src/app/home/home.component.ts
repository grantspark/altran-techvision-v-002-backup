import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { fadeInLeft } from 'ng-animate';
import { HeaderService } from '../_layout/header/header.service';
import { TranslationService } from '../shared/translation.service';
import { Router, NavigationEnd } from '@angular/router';

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
export class HomeComponent implements AfterViewChecked {

    public fadeInLeft: any;
    private loaded: boolean = false;

    public constructor(private headerService: HeaderService,
        public translationService: TranslationService) {        
        headerService.showBack = false;

    }

    ngAfterViewChecked() {
        if (!this.loaded) {
            window.parent.postMessage({ "height": 0 }, "*");
            setTimeout(() => {
                
                var height = document.documentElement.scrollHeight;

                console.log("Height: " + height);
                window.parent.postMessage({ "height": height }, "*");
            }, 100);
        }

        this.loaded = true;
    }
}
