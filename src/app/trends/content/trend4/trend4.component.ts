import { ViewportScroller }   from '@angular/common';
import { Component, OnInit }          from '@angular/core';
import { TranslationService } from '../../../shared/translation.service';

@Component({
    selector: 'app-trend4',
    templateUrl: './trend4.component.html',
    styleUrls: [ './trend4.component.scss' ]
})
export class Trend4Component implements OnInit{

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
