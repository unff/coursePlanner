import { Component, OnInit } from '@angular/core';
import { CourseListService } from '../course-list.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 
  constructor(private _courseListService : CourseListService) { }

  ngOnInit() {

  }
  
  // private 

}
