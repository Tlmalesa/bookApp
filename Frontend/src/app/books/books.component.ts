import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

   books: any;
   showMsg:boolean = false;
  // id:any;

  constructor(private router:Router,public booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.GetAllBooks().subscribe(res=>{
    this.books=res;
    console.log(res);
    });
    
  }
edit(id:any){
  localStorage.setItem("id",id);
 
  
}

onSubmit(){
 
    this.router.navigate(['/books']);
}
deleteABook:any;

  delete(id : any){  //delete a book by book id
    if(confirm("Are you sure you want to delete this item ")) {
      //load and displaying windows dialog message
    window.location.reload();
    this.booksService.DeleteBook(id).subscribe(data=> this.deleteABook = data);
    this.showMsg = true;
    }
  }


}
