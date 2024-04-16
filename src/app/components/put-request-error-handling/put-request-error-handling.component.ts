import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AppService } from "../../app.service";

@Component({ selector: 'put-request-error-handling', templateUrl: 'put-request-error-handling.component.html' })
export class PutRequestErrorHandlingComponent implements OnInit {
    postId: any;
    errorMessage: any;

    constructor(private service: AppService) { }

    ngOnInit() {
        const body = { title: 'Angular PUT Request Example' };
        const authToken = 'hii';
        this.service.updatePostwitherror(body, authToken)
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