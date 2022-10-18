import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './modules/general/blog/add-post/add-post.component';
import { ListPostComponent } from './modules/general/blog/list-post/list-post.component';
import { UpdatePostComponent } from './modules/general/blog/update-post/update-post.component';


const routes: Routes = [
    
  { path: 'add-post', component: AddPostComponent },
  { path: 'list-post', component: ListPostComponent },
  {path: 'update-post/:id', component: UpdatePostComponent },
   
];


@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],
  declarations: [],

})
export class AppRoutingModule { }
