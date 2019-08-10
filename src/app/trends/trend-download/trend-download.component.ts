import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { TranslationService } from '../../shared/translation.service';

@Component({
    selector: 'app-trend-download',
    templateUrl: './trend-download.component.html',
    styleUrls: ['./trend-download.component.scss']
})
export class TrendDownloadComponent implements OnInit {



    public submitted: boolean;

    public formGroup: FormGroup = new FormGroup({

        firstname: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        company: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        subscribed: new FormControl(''),

    });

    public constructor(private httpClient: HttpClient,
        public translationService: TranslationService) {

    }

    public ngOnInit() {

    }
    public onSubmitClick(): void {

        this.submitted = true;

        this.httpClient.post(`${ environment.API_BASE }/email`, this.formGroup.value).subscribe(result => {

        });

    }  
}
