import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Post, PostsService } from '../posts.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post
  id: number

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {
    this.id = this.route.snapshot.params.id
  }

  ngOnInit() {
    this.postsService
      .getPost(this.id)
      .subscribe((data: Post) => (this.post = data))
  }
}
