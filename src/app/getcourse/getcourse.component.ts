import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-getcourse',
  templateUrl: './getcourse.component.html',
  styleUrls: ['./getcourse.component.css']
})
export class GetcourseComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewCourse().subscribe(
      (data)=>{this.getData=data}
    )
  }
  getData:any=[]

  ngOnInit(): void {
  }

}
