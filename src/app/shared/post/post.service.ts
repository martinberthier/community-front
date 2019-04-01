import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  post: {
    category: {
      idCategory: any
    },
    content: String,
    tag: String,
    user: {
      userId: any,
    }
  }

getAll(): Observable<any> {
  return this.http.get('//localhost:8080/community/comments');
  }

  getAllByCategory(id: string): Observable<any> {
    return this.http.get('//localhost:8080/community/categories/'+ `${id}` +'/comments');
    }

  get(id: string) {
    return this.http.get('//localhost:8080/community/comments' + '/' + id);
  }
//A
  save(post: any, idCategory:any): Observable<any> {
    let result: Observable<Object>;
    if (post['href']) {//ici il faudrait mettre post.id au lieu de href
      result = this.http.put(post.href, post);
    } else {
      // post.user.userId = localStorage.getItem('currentUserId');//undefined
        console.log("user id de ce post",localStorage.getItem('currentUserId'));
        console.log("category id de ce post", idCategory);
      result = this.http.post('//localhost:8080/community/comments', post);
    }
    return result;
  }

  // save(post: any): Observable<any> {
  //   let result: Observable<Object>;
  //   if (post['href']) {//ici il faudrait mettre post.id au lieu de href
  //     result = this.http.put(post.href, post);
  //   } else {
  //     result = this.http.post('//localhost:8080/community/comments', post);
  //   }
  //   return result;
  // }

  remove(id: string) {
    return this.http.delete('//localhost:8080/community/comments/'+ id);
  }
  
}