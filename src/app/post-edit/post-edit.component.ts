import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../shared/post/post.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit, OnDestroy {

  post: any = {};
  public id : string;
  // public userId : String;
  // public categoryId : String;
  sub: Subscription;

  // post: {
  //   category: {
  //     idCategory: any
  //   },
  //   content: String,
  //   tag: String,
  //   user: {
  //     userId: any,
  //   }
  // }


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private giphyService: GiphyService
  ) { }
 

  ngOnInit() {
    
  
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.postService.get(id).subscribe((post: any) => {
          if (post) {
            this.post = post;
            console.log(this.post);
            //this.post.href = post._links.self.href;
            
            this.giphyService.get(post.tag).subscribe(url => post.giphyUrl = url);
          } else {
            console.log(`Post with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

//   save(form: NgForm) {
//     this.sub = this.route.params.subscribe(params => {
//       const idCategory = params['idCategory'];

//     console.log(form)
//     this.postService.save(form).subscribe(result => {
//      // this.gotoList();
//       this.router.navigate(['/home']);
//     }, error => console.error(error));
//     });
// }
//A
  save(form: NgForm) {
    this.sub = this.route.params.subscribe(params => {
      const idCategory = params['idCategory'];

    console.log(form)
    this.postService.save(form, idCategory).subscribe(result => {
     // this.gotoList();
      this.router.navigate(['/home']);
    }, error => console.error(error));
    });
}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/home']);
  }

  // save(form: NgForm) {
  //   console.log(form)
  //   this.postService.save(form).subscribe(result => {
  //     //this.gotoList();
  //     this.router.navigate(['/home']);
  //   }, error => console.error(error));
  // }

   remove(id) {
    this.postService.remove(id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
