import { ViewportScroller }   from '@angular/common';
import { Component }          from '@angular/core';
import { TranslationService } from '../../../shared/translation.service';

@Component({
    selector: 'app-trend4',
    templateUrl: './trend4.component.html',
    styleUrls: [ './trend4.component.scss' ]
})
export class Trend4Component {

    public constructor(public translationService: TranslationService,
                       private viewScroller: ViewportScroller) {
    }

    public scrollTo(tag: string) {

        this.viewScroller.scrollToAnchor(tag);

    }

}
