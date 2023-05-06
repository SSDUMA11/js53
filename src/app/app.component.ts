import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post = {title: "", text: "", avatar:''};

  addPost(newPost: any){
    this.post.title = newPost.title
    this.post.text = newPost.text
    this.post.avatar = newPost.avatar
  }
}

