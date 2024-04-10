import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'put-request-headers', templateUrl: 'put-request-headers.component.html' })
export class PutRequestHeadersComponent implements OnInit {
    postId: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        const body = { title: 'Angular PUT Request Example' };
        this.http.put<any>('https://jsonplaceholder.typicode.com/posts/1', body, { headers })
            .subscribe(data => this.postId = data.id);
    }
}