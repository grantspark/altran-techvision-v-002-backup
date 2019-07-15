import { ViewportScroller }   from '@angular/common';
import { Component }          from '@angular/core';
import { TranslationService } from '../../../shared/translation.service';

@Component({
    selector: 'app-trend2',
    templateUrl: './trend2.component.html',
    styleUrls: [ './trend2.component.scss' ]
})
export class Trend2Component {

    public constructor(public translationService: TranslationService,
                       private viewScroller: ViewportScroller) {
    }

    public scrollTo(tag: string) {

        this.viewScroller.scrollToAnchor(tag);

    }


}
