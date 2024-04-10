import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'delete-request-error-handling', templateUrl: 'delete-request-error-handling.component.html' })
export class DeleteRequestErrorHandlingComponent implements OnInit {
    status: any;
    errorMessage: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        /*this.http.delete('https://jsonplaceholder.typicode.com/invalid-url')*/
        this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
            .subscribe({
                next: data => {
                    this.status = 'Delete successful';
                },
                error: error => {
                    this.errorMessage = error.message;
                    console.error('There was an error!', error);
                }
            });
    }
}