import { Component, OnInit } from '@angular/core';
import { PostService } from './../../../../services/post.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  posts:any[] =[]
  
  constructor(private postService: PostService) { }
  formPost? :FormGroup;
  ngOnInit() : void {
    
      this.postService.getPosts().subscribe((data:any) => {
      this.posts = data
    })
 }
 deleteTodo(id,e){
  e.preventDefault()
  this.postService.deletePosts(id).subscribe((response)=>{
    console.log('deleted ' +id);
    this.ngOnInit()
  })

 }
}
