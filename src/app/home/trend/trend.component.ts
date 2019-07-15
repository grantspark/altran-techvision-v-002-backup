import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Input }             from '@angular/core';

@Component({
    selector: 'app-trend',
    templateUrl: './trend.component.html',
    styleUrls: [ './trend.component.scss' ],
    // animations: [
    //     trigger('slideInOut', [
    //         state('in', style({
    //             opacity: 1,
    //             width: '300px'
    //         })),
    //         state('out', style({
    //             opacity: 1,
    //             width: '100%'
    //         })),
    //         transition('in => out', animate('0ms ease-in-out')),
    //         transition('out => in', animate('100ms ease-in-out'))
    //     ])
    // ]
})
export class TrendComponent {

    @Input() public link: string;
    @Input() public title: string;
    @Input() public subtitle: string;
    @Input() public backgroundColor: string;
    @Input() public icon: string;
    @Input() public buttonText: string;
    @Input() public buttonBackgroundColor: string;

    public toggled: string;

    @HostListener('mouseenter')
    public onMouseEnter() {

        this.toggled = 'in';

    }

    @HostListener('mouseleave')
    public onMouseLeave() {

        this.toggled = 'out';

    }

}
