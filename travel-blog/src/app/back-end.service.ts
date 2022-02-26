import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './post.service';

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}

  // https://travel-blog-1aa87-default-rtdb.firebaseio.com/

  //funcionality 1 - save data

  saveData() {
    //step 1: get list of post from post service
    const listOfPosts: Post[] = this.postService.getPosts();
    //step 2: send list of post to database for saving
    this.http
      .put(
        'https://travel-blog-1aa87-default-rtdb.firebaseio.com/posts.json',
        listOfPosts
      )
      .subscribe((resp) => {
        console.log(resp);
      });
  }

  //functionality 2 - fetch data

  fetchDate() {
      // Step 1: fetch data from database to Backend service 
    this.http
      .get<Post[]>(
        'https://travel-blog-1aa87-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        tap((listOFPosts: Post[]) => {
          console.log(listOFPosts);

          //Step 2: Send this data to post service
          this.postService.setPosts(listOFPosts);
        })
      )
      .subscribe();
  }
}
