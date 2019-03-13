import { PostService } from '../shared/post/post.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Array<any>;


  constructor(private postService: PostService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.postService.getAll()
      .subscribe(response => {
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

}
