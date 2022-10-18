import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError, map } from 'rxjs';
import * as postsData from './../../db.json'
import { Post } from '../modules/general/blog/post';
const baseUrl = 'http://localhost:4200';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  data = postsData
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  getPost(id): Observable<any> {
    return this.http.get( "http://localhost:3000/posts/"+id)
  }
  getPosts(): Observable<any> {
    return this.http.get( "http://localhost:3000/posts")
  }
  postPosts(data:any): Observable<any> {
    return this.http.post("http://localhost:3000/posts" , data)
  }
  editPosts(id:any ,data:any): Observable<any> {
    return this.http.put("http://localhost:3000/posts/"+id , data)
  }
  deletePosts(id:any): Observable<any> {
    return this.http.delete("http://localhost:3000/posts/"+id)
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
  enroll(article : Post){
    return this.http.post<any>(this.url, article)
           .pipe(catchError(this.handleError))
   }
  
}


