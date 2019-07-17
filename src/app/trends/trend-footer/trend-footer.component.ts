import { Component, Input }   from '@angular/core';
import { TranslationService } from '../../shared/translation.service';

@Component({
    selector: 'app-trend-footer',
    templateUrl: './trend-footer.component.html',
    styleUrls: [ './trend-footer.component.scss' ]
})
export class TrendFooterComponent {

    @Input() public icon: string;
    @Input() public link: string;
    @Input() public arrowImage: string;
    @Input() public color: string;
    
    @Input() public title: string;
    @Input() public subtitle: string;

    public constructor(public translationService: TranslationService) {
    }

}
