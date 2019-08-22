import { Component, OnInit }          from '@angular/core';
import { TranslationService } from '../../../shared/translation.service';

@Component({
    selector: 'app-trend1',
    templateUrl: './intro.component.html',
    styleUrls: [ './intro.component.scss' ]
})
export class IntroComponent implements OnInit {

    public constructor(public translationService: TranslationService) {
    }

    ngOnInit() {
        var height=document.getElementsByTagName("html")[0].scrollHeight;
        console.log("Height: " + height);
        window.parent.postMessage({"height": height}, "*");
    }

}
