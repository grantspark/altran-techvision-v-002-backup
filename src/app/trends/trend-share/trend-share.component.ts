import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslationService } from 'src/app/shared/translation.service';

@Component({
    selector: 'app-trend-share',
    templateUrl: './trend-share.component.html',
    styleUrls: ['./trend-share.component.scss']
})
export class TrendShareComponent implements OnInit {

    @Input() public basic: boolean;
    @Input() public title: string;

    public twitterLink: string;
    public facebookLink: string;
    public linkedInLink: string;

    public constructor(private httpClient: HttpClient, private translationService: TranslationService) {

    }

    ngOnInit() {
        this.twitterLink = "https://twitter.com/intent/tweet?url=" + window.location.href + "&text=" + this.title;
        this.facebookLink = "https://www.facebook.com/sharer/sharer.php?u= " + window.location.href;
        this.linkedInLink = "https://www.linkedin.com/shareArticle?mini=true&url=" + window.location.href + "&title=" + this.title

    }
}
