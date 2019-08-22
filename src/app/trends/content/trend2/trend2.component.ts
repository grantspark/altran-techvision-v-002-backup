import { ViewportScroller } from '@angular/common';
import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { TranslationService } from '../../../shared/translation.service';

@Component({
    selector: 'app-trend2',
    templateUrl: './trend2.component.html',
    styleUrls: ['./trend2.component.scss']
})
export class Trend2Component implements AfterViewChecked {
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
