import { ViewportScroller }   from '@angular/common';
import { Component, OnInit }          from '@angular/core';
import { TranslationService } from '../../../shared/translation.service';

@Component({
    selector: 'app-trend1',
    templateUrl: './trend1.component.html',
    styleUrls: [ './trend1.component.scss' ]
})
export class Trend1Component implements OnInit {

    public constructor(public translationService: TranslationService,
                       private viewScroller: ViewportScroller) {

    }

    public scrollTo(tag: string) {

        this.viewScroller.scrollToAnchor(tag);

    }


    
    ngOnInit() {
        window.parent.postMessage({"height": 2000}, "*");
    }
}

