import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

export const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(baseUrl)
  }
  getPost(id: number): Observable<Post> {
    return this.http
      .get<Post>(`${baseUrl}/${id}`)
      .pipe(tap(x => console.log(x)))
  }
}
