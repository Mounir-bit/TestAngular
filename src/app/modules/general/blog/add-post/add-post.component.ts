import { Component, OnInit } from '@angular/core';
import { PostService } from './../../../../services/post.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  submitted = false;
  errorMsg = '';
  postModel = '';
  categories = ['Sport', 'Technologies',
    'Économie', 'Société', 'Culture'];
  topicHasError = true;
  constructor(private postService: PostService, private route:Router) { }
  formPost? :FormGroup;
  ngOnInit() : void {
    this.formPost = new FormGroup({
      titre: new FormControl('',Validators.required),
      categorie: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      date: new FormControl('',Validators.required),
    }) 
  }
  validateTopic(value){
    if(value ==="default"){
      this.topicHasError = true
    }else{
      this.topicHasError =  false
    }
  }

  onSubmit(){
    console.log(this.formPost?.value);
    console.log(this.formPost?.valid)
    
    this.submitted = true
    if (this.formPost?.invalid) {
      return;
    }
    
    
    this.postService.postPosts(this.formPost?.value).subscribe(
      (data:any) => {
        console.log('success!', data)
        this.route.navigate(['/list-post'])
    }

      ,
      error => this.errorMsg = error.statusText
      )
  } 
}