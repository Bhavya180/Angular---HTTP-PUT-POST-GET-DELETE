import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Article } from "./Article.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  authToken: any
  constructor(private http: HttpClient) {}

  updatePost(body: any, authToken: string): Observable<any> {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.authToken}`
  });
    return this.http.put<any>('https://jsonplaceholder.typicode.com/posts/1', body);
  }

  updateArticle(body: Article, authToken: string): Observable<Article> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`}); 
    return this.http.put<Article>('https://jsonplaceholder.typicode.com/posts/1', body);
  }

  updatePostWithHeaders(body: any, authToken: string,): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`});
    return this.http.put<any>('https://jsonplaceholder.typicode.com/posts/1', body, { headers });
  }

  updatePostwitherror(body: any, authToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`});
    return this.http.put<any>('https://jsonplaceholder.typicode.com/posts/1', body)
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }
}
