import {Component, OnInit} from '@angular/core';
import {HeaderService}     from '../_layout/header/header.service';

@Component({
    selector: 'app-trends',
    templateUrl: './trends.component.html',
    styleUrls: [ './trends.component.scss' ]
})
export class TrendsComponent implements OnInit {

    public constructor(private headerService: HeaderService) {

        headerService.showBack = true;

    }

    ngOnInit() {
    }

}
