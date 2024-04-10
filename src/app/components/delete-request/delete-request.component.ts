import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'delete-request', templateUrl: 'delete-request.component.html' })
export class DeleteRequestComponent implements OnInit {
    status: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
            .subscribe(() => this.status = 'Delete successful');
    }
}