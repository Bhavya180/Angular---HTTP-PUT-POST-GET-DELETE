import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AppService } from "../../app.service";
import { HttpHeaders } from '@angular/common/http';


@Component({ selector: 'put-request-headers', templateUrl: 'put-request-headers.component.html' })
export class PutRequestHeadersComponent implements OnInit {
    postId: any;

    constructor(private service: AppService) { }

    ngOnInit() {
        const authToken = 'Mangla';
        const headers = new HttpHeaders()
            .set('Authorization', `Bearer ${authToken}`)
            .set('My-Custom-Header', 'foobar');

        const body = { title: 'Angular PUT Request Example' };
        this.service.updatePostWithHeaders(body, authToken)
            .subscribe(data => this.postId = data.id);
    }
}