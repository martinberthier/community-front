import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';

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

  //maintenant
  save(form: any, idCategory:any, idPost:any, idCategory2:any): Observable<any> {
    //console.log("testeee",form)
    let result: Observable<Object>;

    const post= {
      category: {
        id: idCategory
      },
      id: idPost,
      content: form.content,
      tag: form.tag,
      user: {
        id: localStorage.getItem('currentUserId'),
      }
    }
    console.log("post ====", post)
    // if (form['href']) {//ici il faudrait mettre post.id au lieu de href
    //   result = this.http.put(form.href, form);
      if (post.id) {//ici il faudrait mettre post.id au lieu de href
        //this.post.id = 
        post.category.id= idCategory2;
        console.log("on fait un put", post.id, post)
        result = this.http.put('//localhost:8080/community/comments/'+ post.id, post);
    } else {
        console.log("category id de ce post", idCategory);//affiche l'id en question
      result = this.http.post('//localhost:8080/community/comments/', post);
    }
    return result;
  }

  //après alexis
  // save(form: any, idCategory:any): Observable<any> {
  //   //console.log("testeee",form)
  //   let result: Observable<Object>;

  //   const post= {
  //     category: {
  //       id: idCategory
  //     },
  //     content: form.content,
  //     tag: form.tag,
  //     user: {
  //       id: localStorage.getItem('currentUserId'),
  //     }
  //   }
  //   console.log("post ====", post)
  //    if (form['href']) {//ici il faudrait mettre post.id au lieu de href
  //   //   result = this.http.put(form.href, form);
  //   result = this.http.put(form.href, post);
  //   } else {
  //       console.log("category id de ce post", idCategory);//affiche l'id en question
  //     result = this.http.post('//localhost:8080/community/comments/', post);
  //   }
  //   return result;
  // }

  //avant alexis
  // save(post: any, idCategory:any): Observable<any> {
  //   let result: Observable<Object>;
  //   if (post['href']) {//ici il faudrait mettre post.id au lieu de href
  //     result = this.http.put(post.href, post);
  //   } else {
  //     //this.post.user.userId = localStorage.getItem('currentUserId');//undefined
  //       //console.log("user id de ce post",localStorage.getItem('currentUserId'));//affiche l'id en question
  //       const userId = localStorage.getItem('currentUserId');
  //       console.log("category id de ce post", idCategory);//affiche l'id en question
  //     result = this.http.post('/community/comments', post);
  //   }
  //   return result;
  // }

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