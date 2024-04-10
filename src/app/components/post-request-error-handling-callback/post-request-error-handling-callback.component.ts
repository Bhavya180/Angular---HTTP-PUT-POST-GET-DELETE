import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'post-request-error-handling-callback', templateUrl: 'post-request-error-handling-callback.component.html' })
export class PostRequestErrorHandlingCallbackComponent implements OnInit {
    postId?: number;
    errorMessage?: string;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        /*this.http.post<any>('https://reqres.in/invalid-url', { title: 'Angular POST Request Example' })*/
        this.http.post<any>('https://reqres.in/api/posts', { title: 'Angular POST Request Example' })
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