import { Component, Input }   from '@angular/core';
import { TranslationService } from '../../shared/translation.service';

@Component({
    selector: 'app-trend-header',
    templateUrl: './trend-header.component.html',
    styleUrls: [ './trend-header.component.scss' ]
})
export class TrendHeaderComponent {

    @Input() public image: string;

    public constructor(public translationService: TranslationService) {
    }

}
