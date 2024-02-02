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

//getting all the books

  GetAllBooks(){
      return this.http.get<any>(`${this.BOOKS_URL}`).pipe(map((res:any)=>{
        return res
      }));
  }

  //getting the book by ID

getOneBook(id:any){
  return this.http.get(`${this.BOOKS_URL}`+ id);
}
//delete the book

  DeleteBook(id:any){
   
      return this.http.delete(`${this.BOOKS_URL}`+ id);
  }
//add a book

  AddBook(data:any){
      return this.http.post(`${this.BOOKS_URL}`,data);
  }

  //edit the books

  EditBook(id:any,book:BooksInfo): Observable<BooksInfo>{
    return this.http.put<BooksInfo>(`${this.BOOKS_URL}${id}`,book);
}

}
