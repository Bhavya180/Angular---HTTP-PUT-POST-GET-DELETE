import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'put-request', templateUrl: 'put-request.component.html' })
export class PutRequestComponent implements OnInit {
    postId: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        const body = { title: 'Angular PUT Request Example' };
        this.http.put<any>('https://jsonplaceholder.typicode.com/posts/1', body)
            .subscribe(data => this.postId = data.id);
    }
}