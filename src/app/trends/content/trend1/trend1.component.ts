import { ViewportScroller } from '@angular/common';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { TranslationService } from '../../../shared/translation.service';

@Component({
    selector: 'app-trend1',
    templateUrl: './trend1.component.html',
    styleUrls: ['./trend1.component.scss']
})
export class Trend1Component implements AfterViewChecked {
    private loaded: boolean = false;

    public constructor(public translationService: TranslationService,
        private viewScroller: ViewportScroller) {

    }

    public scrollTo(tag: string) {

        this.viewScroller.scrollToAnchor(tag);

    }

    ngAfterViewChecked() {
        if (!this.loaded) {
            window.parent.postMessage({ "height": 0 }, "*");

            setTimeout(() => {
                var height = document.documentElement.scrollHeight;

                console.log("Height: " + height);
                window.parent.postMessage({ "height": height }, "*");

                this.loaded = true;
            }, 100);
        }

    }
}

