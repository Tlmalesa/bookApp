import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DisplayBooksService } from '../display-books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss']
})
export class UserDisplayComponent implements OnInit {

  books: any;
  constructor(private router:Router,public displayBooksService: DisplayBooksService) { }

  ngOnInit(): void {
    // Displaying all user's name
    this.displayBooksService.displayUsers().subscribe(res=>{
      this.books=res;
      console.log(res);
      });
 
}

}
