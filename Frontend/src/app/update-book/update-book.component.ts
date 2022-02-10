import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,public booksService: BooksService) { }
 
  user:any={};
  bookId:any;
  updateBook:boolean=false;
   showMsg:boolean = false;
 
  ngOnInit(): void {
    this.bookId=localStorage.getItem("id");//getting book id from local storage
    const params=this.route.snapshot.params;
    if(params.id){
      this.booksService.getOneBook(params.id).subscribe(res=>{
        this.user=res;
        this.updateBook=true;
        
      })
    }
    
  }
bookUpdating(){//updating the book ifnormation
   if(confirm("Are you sure you want to edit this item ")) {
      //load and displaying windows dialog message
    window.location.reload();
  this.booksService.EditBook(this.bookId,this.user).subscribe(res=>{
    console.log(res);
       this.showMsg = true;
  
  })
   }
}
}
