import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input }                    from '@angular/core';
import { TrendHorizontalExpanderService }      from './trend-horizontal-expander.service';

@Component({
    selector: 'app-trend-horizontal-expander',
    templateUrl: './trend-horizontal-expander.component.html',
    styleUrls: [ './trend-horizontal-expander.component.scss' ],
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
                style({ opacity: '0' }),
                animate(600)
            ])
        ])
    ]
})
export class TrendHorizontalExpanderComponent {

    @Input() public icon: string;
    @Input() public color: string;
    @Input() public title: string;
    @Input() public callout: string;

    public expanded: boolean;

    public constructor(public trendHorizontalExpanderService: TrendHorizontalExpanderService) {

        trendHorizontalExpanderService.close$.subscribe(() => this.expanded = false);

    }

    public onReadMoreClick(): void {

        this.trendHorizontalExpanderService.close();

        this.expanded = true;

    }

    public onCloseClick(): void {

        this.expanded = false;

    }

}
