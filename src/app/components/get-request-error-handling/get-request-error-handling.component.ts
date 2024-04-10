import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'get-request-error-handling', templateUrl: 'get-request-error-handling.component.html' })
export class GetRequestErrorHandlingComponent implements OnInit {
    totalAngularPackages: any;
    errorMessage: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        /*this.http.get<any>('https://api.npms.io/v2/invalid-url')*/
        this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular')
        .subscribe({
            next: data => {
                this.totalAngularPackages = data.total;
            },
            error: error => {
                this.errorMessage = error.message;
                console.error('There was an error!', error);
            }
        })
    }
}