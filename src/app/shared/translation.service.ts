import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {

    public data: any;

    public constructor(private httpClient: HttpClient) {

    }

    public use(lang: string): void {

        this.httpClient.get(`/assets/translations/${ lang }.json`).subscribe(data => this.data = data);

    }

}
