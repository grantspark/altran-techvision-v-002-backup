import { Injectable }    from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TrendHorizontalExpanderService {

    public close$: ReplaySubject<void> = new ReplaySubject();

    public close(): void {

        this.close$.next();

    }

}
