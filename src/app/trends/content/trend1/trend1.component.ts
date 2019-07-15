import { ViewportScroller }   from '@angular/common';
import { Component }          from '@angular/core';
import { TranslationService } from '../../../shared/translation.service';

@Component({
    selector: 'app-trend1',
    templateUrl: './trend1.component.html',
    styleUrls: [ './trend1.component.scss' ]
})
export class Trend1Component {

    public constructor(public translationService: TranslationService,
                       private viewScroller: ViewportScroller) {

    }

    public scrollTo(tag: string) {

        this.viewScroller.scrollToAnchor(tag);

    }

}

