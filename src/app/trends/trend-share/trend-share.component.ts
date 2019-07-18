import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslationService } from 'src/app/shared/translation.service';

@Component({
    selector: 'app-trend-share',
    templateUrl: './trend-share.component.html',
    styleUrls: ['./trend-share.component.scss']
})
export class TrendShareComponent {

    @Input() public basic: boolean;

    public constructor(private httpClient: HttpClient, private translationService: TranslationService) {

    }
}
