import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AppService } from "../../app.service";
import { Article } from "../../Article.model";

@Component({ selector: 'put-request-typed', templateUrl: 'put-request-typed.component.html' })
export class PutRequestTypedComponent implements OnInit {
    postId: any;

    constructor(private service: AppService) { }

    ngOnInit() {          
        const body: Article = { id: 1, title: 'Angular PUT Request Example' };
        const authToken = 'Ram';
        this.service.updateArticle(body, authToken)
            .subscribe(data => this.postId = data.id);
}
}