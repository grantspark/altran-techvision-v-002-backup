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
        this.sendFormEmail();
        this.sendAfterFormSubmitted(this.formGroup.value.email);
        this.submitted = true;
    }

    sendFormEmail() {
        var dynamicData = this.formGroup.value;
        dynamicData.subject = "Form Submission on altran-techvision-2019.com from " + dynamicData.email

        var msg = {
            personalizations: [
                {
                    to: [{ email: 'info@altran-techvision-2019.com' }],                    
                    dynamic_template_data: dynamicData
                },
            ],
            from: { email: "no-reply-form@em9933.altran-techvision-2019.com" },
            template_id: "d-0573ae68d8d944d89112592aecd152d3"
        };

        this.httpClient.post('https://api.sendgrid.com/v3/mail/send', msg, this.getHeader())
            .toPromise().then(r => {
               
            });
    }

    sendAfterFormSubmitted(toEmail: string) {

        var msg = {
            personalizations: [
                {
                    to: [{ email: toEmail }],

                    dynamic_template_data: {
                        subject: "Here is your Altran TechVision 2019 Download!"
                    }
                }
            ],
            from: { email: "no-reply-form@em9933.altran-techvision-2019.com" },
            template_id: "d-6805781f966041fe96c7df61ed112b74"
        }

        this.httpClient.post('https://api.sendgrid.com/v3/mail/send', msg, this.getHeader())
        .toPromise().then(r =>{});
    }

    getHeader(): any {
        var header = {
            headers: new HttpHeaders()
                .set('Authorization', "Bearer " + "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")
        }

        return header;
    }   
}
