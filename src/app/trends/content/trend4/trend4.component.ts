import { ViewportScroller } from '@angular/common';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { TranslationService } from '../../../shared/translation.service';

@Component({
    selector: 'app-trend4',
    templateUrl: './trend4.component.html',
    styleUrls: ['./trend4.component.scss']
})
export class Trend4Component implements AfterViewChecked {
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
