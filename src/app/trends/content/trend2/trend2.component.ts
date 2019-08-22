import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../../shared/translation.service';

@Component({
    selector: 'app-trend2',
    templateUrl: './trend2.component.html',
    styleUrls: ['./trend2.component.scss']
})
export class Trend2Component implements OnInit {

    public constructor(public translationService: TranslationService,
        private viewScroller: ViewportScroller) {
    }

   
    ngOnInit() {
        var height=document.getElementsByTagName("html")[0].scrollHeight;
        console.log("Height: " + height);
        window.parent.postMessage({"height": height}, "*");
    }

    public scrollTo(tag: string) {

        this.viewScroller.scrollToAnchor(tag);

    }


}
