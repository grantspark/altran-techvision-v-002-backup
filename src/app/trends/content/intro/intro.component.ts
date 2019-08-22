import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { TranslationService } from '../../../shared/translation.service';

@Component({
    selector: 'app-trend1',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements AfterViewChecked {

    private loaded: boolean = false;
    public constructor(public translationService: TranslationService) {
    }

    ngAfterViewChecked() {
        if (!this.loaded) {
            window.parent.postMessage({ "height": 0 }, "*");

            setTimeout(() => {
                var height = document.documentElement.scrollHeight;

                console.log("Height: " + height);
                window.parent.postMessage({ "height": height }, "*");

                this.loaded = true;
            }, 100);
        }

    }
}
