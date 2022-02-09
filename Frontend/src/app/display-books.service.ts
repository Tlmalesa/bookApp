import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserInfo } from '../interfaces/userInfo';

@Injectable({
  providedIn: 'root'
})
export class DisplayBooksService {
  api: string ='https://jsonplaceholder.typicode.com/users'
  constructor(private http: HttpClient) { }

  displayUsers(){
    return this.http.get(this.api)
    
  }

   getUserbyId(id:number): Observable<UserInfo>{
      return this.http.get<UserInfo>(`${this.api}/${id}`);
  }
}
