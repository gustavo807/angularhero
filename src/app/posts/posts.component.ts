import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [
    PostService,
    {
      provide: 'url',
      useValue: 'https://jsonplaceholder.typicode.com/posts'
    }
  ]
})
export class PostsComponent implements OnInit {

  posts : Post [];
  error : string;

  constructor(
    private postService : PostService
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() : void {
    this.postService.getPosts()
      .subscribe(
        posts => this.posts = posts,
        error => this.error = error
      );
  }

}
