import { Component, Input }   from '@angular/core';
import { TranslationService } from '../../shared/translation.service';

@Component({
    selector: 'app-trend-footer',
    templateUrl: './trend-footer.component.html',
    styleUrls: [ './trend-footer.component.scss' ]
})
export class TrendFooterComponent {

    @Input() public src: string;
    @Input() public link: string;
    @Input() public image: string;

    public constructor(public translationService: TranslationService) {
    }

}
