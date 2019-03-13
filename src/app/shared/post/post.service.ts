import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }


getAll(): Observable<any> {
  return this.http.get('//localhost:8080/community/comments');
  }

  get(id: string) {
    return this.http.get('//localhost:8080/community/comments' + '/' + id);
  }

  save(post: any): Observable<any> {
    let result: Observable<Object>;
    if (post['href']) {
      result = this.http.put(post.href, post);
    } else {
      result = this.http.post('//localhost:8080/community/comments', post);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
  
}