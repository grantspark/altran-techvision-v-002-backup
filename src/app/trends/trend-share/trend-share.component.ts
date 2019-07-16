import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-trend-share',
    templateUrl: './trend-share.component.html',
    styleUrls: ['./trend-share.component.scss']
})
export class TrendShareComponent {

    @Input() public basic: boolean;

    public constructor(private httpClient: HttpClient) {

    }
}
