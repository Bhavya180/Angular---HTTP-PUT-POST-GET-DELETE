import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'put-request-typed', templateUrl: 'put-request-typed.component.html' })
export class PutRequestTypedComponent implements OnInit {
    postId: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {          
        const body = { title: 'Angular PUT Request Example' };
        this.http.put<Article>('https://jsonplaceholder.typicode.com/posts/1', body)
            .subscribe(data => this.postId = data.id);
    }
}

interface Article {
    id: number;
    title: string;
}