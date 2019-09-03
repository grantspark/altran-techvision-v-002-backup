import { ViewportScroller } from '@angular/common';
import { Component, ViewChild, ElementRef, DoCheck, AfterViewChecked, OnInit } from '@angular/core';
import { TranslationService } from '../../../shared/translation.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-trend3',
    templateUrl: './trend3.component.html',
    styleUrls: ['./trend3.component.scss'],
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
                style({ opacity: '0' }),
                animate(600)
            ])
        ])
    ]
})
export class Trend3Component implements AfterViewChecked {

    private loaded: boolean = false;

    public constructor(public translationService: TranslationService,
        private viewScroller: ViewportScroller) {
    }

    @ViewChild('bubbleDialog', { static: false }) bubbleDialog: ElementRef<HTMLElement>;

    public scrollTo(tag: string) {

        this.viewScroller.scrollToAnchor(tag);

    }


    private topAdjusted: boolean = false;

    ngAfterViewChecked() {



        if (!this.topAdjusted) {
            setTimeout(() => {
                this.topAdjusted = true;
                console.log(this.bubbleDialog);
                console.log('Dialog Height: ' + this.bubbleDialog.nativeElement.clientHeight);
                if (this.expanded) {
                    this.top -= this.bubbleDialog.nativeElement.clientHeight / 2;
                }
            });
        }

        if (!this.loaded || !this.topAdjusted) {
            window.parent.postMessage({ "height": 0 }, "*");

            setTimeout(() => {
                var height = document.documentElement.scrollHeight;

                console.log("Height: " + height);
                window.parent.postMessage({ "height": height }, "*");
                this.loaded = true;
            }, 100);
        }
    }

    public bubbles: any[] = [{
        icon: '/assets/mobile/bubble_1_privacy.png',
        title: "trend_3_bubble_privacy_title",
        callout: "trend_3_bubble_privacy_callout"
    },
    {
        icon: "/assets/mobile/bubble_2_security.png",
        title: "trend_3_bubble_security_title",
        callout: "trend_3_bubble_security_callout"
    }, {
        icon: "/assets/mobile/bubble_3_distraction.png",
        title: "trend_3_bubble_distraction_title",
        callout: "trend_3_bubble_distraction_callout"
    }, {
        icon: "/assets/mobile/bubble_4_gluttony.png",
        title: "trend_3_bubble_gluttony_title",
        callout: "trend_3_bubble_gluttony_callout"
    }, {
        icon: "/assets/mobile/bubble_5_bias.png",
        title: "trend_3_bubble_bias_title",
        callout: "trend_3_bubble_bias_callout"
    }];

    public expanded: boolean = false;
    public title: string;
    public callout: string;
    public left: number = 0;
    public top: number = 0;


    zoneClick(event, bubbleDialog: HTMLElement) {
        if (this.translationService.data) {
            this.topAdjusted = false;
            this.title = this.translationService.data[event.target.target + "_title"];
            this.callout = this.translationService.data[event.target.target + "_callout"];
            this.left = event.layerX - 100;
            this.top = event.layerY;
            this.expanded = true;
        }
    }

    onCloseClick() {
        this.expanded = false;
    }
}
