import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { IPost } from '../post';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  readPostList(): Observable<Array<IPost>> {
    return this.http.get<Array<IPost>>('https://jsonplaceholder.typicode.com/posts7');
  }

  readPostListObservable(): Observable<Array<IPost>> {
    return this.http.get<Array<IPost>>('https://jsonplaceholder.typicode.com/posts');
  }

  readPost(id: string): Observable<IPost> {
    const head = new HttpHeaders();
    head.append('header1', 'header1');
    return this.http.get<IPost>('https://jsonplaceholder.typicode.com/posts/' + id, {headers: head});
  }

  readPostByUser(userId: string): Observable<Array<IPost>> {
    const param = new HttpParams();
    const param4 = param.set('userId', userId);
    return this.http.get<Array<IPost>>('https://jsonplaceholder.typicode.com/posts', { params: param4 });
  }

  savePost(post: IPost): Observable<string> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post, {responseType: 'text'});
  }

  updatePost(post: IPost): Observable<IPost> {
    return this.http.put<IPost>('https://jsonplaceholder.typicode.com/posts1/' + post.id, post).pipe(
      retry(3),
      catchError(err => {
        // console.log('error caught in service')
        // console.error(err);
        return throwError(err);
      })
    )
  }

  deletePost(id: number): Observable<string> {
    return this.http.delete<string>('https://jsonplaceholder.typicode.com/posts3/' + id).pipe(
      retry(2),
      catchError(err => {
        return throwError(err);
      }));
  }
}
