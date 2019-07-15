import { ViewportScroller }   from '@angular/common';
import { Component }          from '@angular/core';
import { TranslationService } from '../../../shared/translation.service';

@Component({
    selector: 'app-trend3',
    templateUrl: './trend3.component.html',
    styleUrls: [ './trend3.component.scss' ]
})
export class Trend3Component {

    public constructor(public translationService: TranslationService,
                       private viewScroller: ViewportScroller) {
    }

    public scrollTo(tag: string) {

        this.viewScroller.scrollToAnchor(tag);

    }

}
