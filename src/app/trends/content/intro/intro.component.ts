import { Component }          from '@angular/core';
import { TranslationService } from '../../../shared/translation.service';

@Component({
    selector: 'app-trend1',
    templateUrl: './intro.component.html',
    styleUrls: [ './intro.component.scss' ]
})
export class IntroComponent {

    public constructor(public translationService: TranslationService) {
    }

}
