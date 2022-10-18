import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from './../../../../services/post.service';
@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  id = null;
  submitted = false;
  errorMsg = '';
  postModel = '';
  categories = ['Sport', 'Technologies',
    'Économie', 'Société', 'Culture'];
  topicHasError = true;
  constructor(private postService: PostService, private route:Router, private activroute : ActivatedRoute) { }
  formPost? :FormGroup;
  
  ngOnInit() : void {
    console.log(this.activroute.snapshot.params['id'])
    this.id = this.activroute.snapshot.params['id']
    this.postService.getPost (this.id).subscribe((data:any)=>{
      console.log(data)
      this.formPost?.patchValue(data)
    })
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

    this.postService.editPosts(/* `id` is the id of the article that we want to update. */
    this.id,this.formPost?.value).subscribe(
      (data:any) => {
        console.log('success!', data)
        this.route.navigate(['/list-post'])
    }

      ,
      error => this.errorMsg = error.statusText
      )
  }
}
 


