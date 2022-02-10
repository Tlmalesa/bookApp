import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from "@angular/common/http";
import {map} from 'rxjs/operators';
import { BooksInfo } from '../interfaces/booksInfo';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  BOOKS_URL: string = 'http://localhost:3000/books/';

  constructor(public http: HttpClient) {}


  GetAllBooks(){
      return this.http.get<any>(`${this.BOOKS_URL}`).pipe(map((res:any)=>{
        return res
      }));
  }
getOneBook(id:any){
  return this.http.get(`${this.BOOKS_URL}`+ id);
}
  DeleteBook(id:any){
   
      return this.http.delete(`${this.BOOKS_URL}`+ id);
  }

  AddBook(data:any){
      return this.http.post(`${this.BOOKS_URL}`,data);
  }

  EditBook(id:any,book:BooksInfo): Observable<BooksInfo>{
    return this.http.put<BooksInfo>(`${this.BOOKS_URL}${id}`,book);
}

}
