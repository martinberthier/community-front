
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../shared/post/post.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'post-list-by-category',
  templateUrl: './post-list-by-category.component.html',
  styleUrls: ['./post-list-by-category.component.scss']
})
export class PostListByCategoryComponent implements OnInit {

  posts: Array<any>;
  sub: Subscription;
  category: String;
  categoryId: String;

  
  constructor(private postService: PostService, private giphyService: GiphyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      console.log("id ", id);
      if (id) {
        this.postService.getAllByCategory(id).subscribe(response => {
          
          this.posts = response ;
          this.category = response[0].category.name;
          this.categoryId = response[0].category.id;
          // console.log(this.category);
          for (const post of this.posts) {
            post.id=Number(post.id);
            if( post.tag === null) {
            // console.log("tag null");
            } else {
              this.giphyService.get(post.tag).subscribe(url => post.giphyUrl = url);
            }
          }
        })
      }
    })
  }

  public AuthorLogged(){
    return localStorage.getItem('currentUserId')
  }

}
