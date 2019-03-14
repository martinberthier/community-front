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
  
  constructor(private postService: PostService, private giphyService: GiphyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.postService.getAllByCategory(id).subscribe(response => {
          console.log(response);
          this.posts = response ;
          for (const post of this.posts) {
            if( post.tag == null) {
            console.log("tag null");
            } else {
              this.giphyService.get(post.tag).subscribe(url => post.giphyUrl = url);
            }
          }
        })
      }
    })
  }
}
