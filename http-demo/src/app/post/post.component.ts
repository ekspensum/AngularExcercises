import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { IPost } from '../post';
import { error } from '@angular/compiler/src/util';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: IPost;
  errorMessage: any;
  errorObject: HttpErrorResponse;

  allPostObservable: Observable<Array<IPost>>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  getPostList() {
    this.postService.readPostList().subscribe(posts => {
      console.log(posts);
    }, (error: HttpErrorResponse) => {
      this.errorObject = error;
    });
  }

  getPostListObservable(){
    this.allPostObservable = this.postService.readPostListObservable();
  }

  getPost() {
    this.postService.readPost('16').subscribe(post => {
      this.post = post;
    })
  }

  getPostByUser() {
    this.postService.readPostByUser('4').subscribe(userPosts => {
      console.log(userPosts);
    })
  }

  addPost() {
    const post: IPost = ({
      userId: 1,
      id: null,
      title: "My first post",
      body: "body of first post"

    });
    this.postService.savePost(post).subscribe(post => {
      console.log(post);
    })
  }

  editPost() {
    const post: IPost = ({
      userId: 1,
      id: 2,
      title: "My first PUT post",
      body: "body of first PUT post"

    });
    this.postService.updatePost(post).subscribe(answer => {
      console.log(answer);
    }, (error) => {
      this.errorMessage = error;
    });
  }

  removePost(){
    this.postService.deletePost(3).subscribe( answer => {
      console.log(answer);
    }, error => {
      console.log(error);
    })
  }
}
