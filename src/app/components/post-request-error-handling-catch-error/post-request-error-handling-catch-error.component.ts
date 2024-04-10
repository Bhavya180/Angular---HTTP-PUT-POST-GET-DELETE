import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';

@Component({ selector: 'post-request-error-handling-catch-error', templateUrl: 'post-request-error-handling-catch-error.component.html' })
export class PostRequestErrorHandlingCatchErrorComponent implements OnInit {
    postId?: number;
    errorMessage?: string;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        /*this.http.post<any>('https://reqres.in/invalid-url', { title: 'Angular POST Request Example' })*/
        this.http.post<any>('https://reqres.in/api/posts', { title: 'Angular POST Request Example' })
            .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
                this.errorMessage = error.message;
                console.error('There was an error!', error);

                // after handling the error, return a new observable 
                // that doesn't emit any values and completes
                return of();
            }))
            .subscribe(data => {
                this.postId = data.id;
            });
    }
}