import { Routes } from '@angular/router';
import { Page1Component } from '../page1/page1.component';
import { PostsComponent } from '../components/posts/posts.component';

export const routes: Routes = [
    {path:"",component:Page1Component},
    {path:"page1",component:Page1Component},
    {path:"posts",component:PostsComponent}
  
];
