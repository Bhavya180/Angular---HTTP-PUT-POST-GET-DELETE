import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AppService } from "../../app.service";
import { Console } from "console";

@Component({ selector: 'put-request', templateUrl: 'put-request.component.html' })
export class PutRequestComponent implements OnInit {
    postId: any;
    inputTitle: string = '';

    constructor(private service: AppService) { }

    ngOnInit() {
        console.log('heres')
        this.postId = '';}
    updatePost() {
        const body = { title: this.inputTitle };
        const authToken = 'Bhav';
        this.service.updatePost(body, authToken)
            .subscribe(data  => this.postId = data.id);
    }
}
