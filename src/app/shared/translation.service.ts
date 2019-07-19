import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TranslationService  implements OnInit {

    public data: any;

    ngOnInit(){
        
    }

    public constructor(private httpClient: HttpClient){
        this.httpClient.get("http://ip-api.com/json").toPromise().then((r: any) => 
        {
            if (r.country == "France") {
                this.use('fr');
            } else {
                this.use('en');
            }            
        });


    }

    public use(lang: string): void {

        this.httpClient.get(`/assets/translations/${ lang }.json`).subscribe(data => this.data = data);

    }

}
