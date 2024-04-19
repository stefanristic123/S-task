import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostsService } from '../services';
import { Post } from '../models';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent {
  post: Post | undefined;

  constructor(private route: ActivatedRoute, private postService: PostsService, private _location: Location) { }

  ngOnInit(): void {
    const postId = +this.route.snapshot.paramMap.get('id')!;
    this.postService.getPostById(postId).subscribe(data => {
      this.post = data;
    });
  }

  backClicked() {
    this._location.back();
  }
}
