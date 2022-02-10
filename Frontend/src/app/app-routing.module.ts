import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { ViewUserInfoComponent } from './view-user-info/view-user-info.component';
import { LandingComponent } from './landing/landing.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {path: '', redirectTo: '/app', pathMatch: 'full' },
  {path:'app', component:LandingComponent},
  {path:'books', component:BooksComponent },
  {path:'add', component:AddBookComponent},
  {path:'user', component:UserDisplayComponent},
  {path:'user/:id', component:ViewUserInfoComponent},
  {path:'books/:id', component:UpdateBookComponent}
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
