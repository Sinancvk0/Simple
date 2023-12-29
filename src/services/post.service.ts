import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseType } from '../models/types';
import { Post } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<ResponseType<Post>>{
    return this.httpClient.get<ResponseType<Post>>("https://dummyjson.com/posts")
  }
}
