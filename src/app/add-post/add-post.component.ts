import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})

export class AddPostComponent {

  @Output() onPost = new EventEmitter();
  
  titleInputValue = '';
  textInputValue = '';
  avatarInputValue='';

  onTitle(event: any){
    this.titleInputValue = event.target.value;
  }
  onText(event: any) {
    const value = event.target.value;
    if (value.length >= 50) {
      this.textInputValue = value.substring(0, 50);
    } else {
      this.textInputValue = value;
    }
  }
  onAvatar(event: any){
    this.avatarInputValue = event.target.value;
  }

  addNewPost(titleValue: string, textValue: string, avatarValue:string ) {
    const value = {
      title: titleValue,
      text: textValue,
      avatar: avatarValue,

    }
    
    this.titleInputValue = '';
    this.textInputValue = '';
    this.avatarInputValue = '';
    
    this.onPost.emit(value)

}}

  


