import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/posts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  posts: Post[] = [];
constructor(private postService:PostService){


}
ngOnInit():void{

  this.getList();
}
getList(): void {
  this.postService.getAll().subscribe(result => {
    if (Array.isArray(result["posts"])) {
      this.posts = result["posts"];
    } else {
    
      this.posts = [result["posts"]];
    }
  });
}

}
