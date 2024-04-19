import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PostsService } from '../services';
import { Post } from '../models';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  posts: Post[] = [];

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
