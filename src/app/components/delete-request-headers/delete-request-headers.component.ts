import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'delete-request-headers', templateUrl: 'delete-request-headers.component.html' })
export class DeleteRequestHeadersComponent implements OnInit {
    status: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        this.http.delete('https://jsonplaceholder.typicode.com/posts/1', { headers })
            .subscribe(() => this.status = 'Delete successful');
    }
}