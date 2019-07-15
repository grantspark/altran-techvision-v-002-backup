import {Component}     from '@angular/core';
import {HeaderService} from './header.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {

    public constructor(public headerService: HeaderService) {


    }

}
