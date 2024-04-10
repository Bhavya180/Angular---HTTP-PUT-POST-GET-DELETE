import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'put-request-error-handling', templateUrl: 'put-request-error-handling.component.html' })
export class PutRequestErrorHandlingComponent implements OnInit {
    postId: any;
    errorMessage: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        const body = { title: 'Angular PUT Request Example' };
        this.http.put<any>('https://jsonplaceholder.typicode.com/invalid-url', body)
        /*this.http.put<any>('https://jsonplaceholder.typicode.com/posts/1', body)*/
            .subscribe({
                next: data => {
                    this.postId = data.id;
                },
                error: error => {
                    this.errorMessage = error.message;
                    console.error('There was an error!', error);
                }
            });
    }
}