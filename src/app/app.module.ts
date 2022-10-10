import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { RouterModule, Routes } from '@angular/router';
import { GetcourseComponent } from './getcourse/getcourse.component';

const link:Routes=[
  {path:"",component:AddcourseComponent},
  {path:"view",component:GetcourseComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddcourseComponent,
    GetcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(link)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
