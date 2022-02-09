import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap} from '@angular/router';
import { DisplayBooksService } from '../display-books.service';
import { UserInfo } from '../../interfaces/userInfo';


@Component({
  selector: 'app-view-user-info',
  templateUrl: './view-user-info.component.html',
  styleUrls: ['./view-user-info.component.scss']
})
export class ViewUserInfoComponent implements OnInit {
id:any;
user:any={}
  constructor(private route:ActivatedRoute,public displayBooksService: DisplayBooksService) { }

  ngOnInit(): void {
    
    const params=this.route.snapshot.params;
    if(params.id){
      this.displayBooksService.getUserbyId(params.id).subscribe(res=>{
        this.user=res;
        console.log("kkk",res);
        
      })
    }
  }
  
}
