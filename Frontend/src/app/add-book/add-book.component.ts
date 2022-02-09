import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  title: string;
   author: string;
   description: string;
   image: string;
   constructor(private router:Router,public booksService: BooksService) { }

  ngOnInit(): void {
  }
  addBook(){ //Adding new book to database
    return new Promise(resolve => {
      const body = {
        title: this.title,
        author: this.author,
        description: this.description,
        image:this.image,
      };
        this.booksService.AddBook(body).subscribe(data => {
          this.router.navigate(['/books'])
        })
    });
   }
  
}
