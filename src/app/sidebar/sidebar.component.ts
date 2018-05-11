import { Component, OnInit } from '@angular/core';
import { CourseListService } from '../course-list.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  breakdown: any = {
    totalCredits: 0,
    foundation: 0,
    writing: 0,
    values: 0,
    civ: 0,
    disciplinary: 0,
    humanities: 0,
    sbs: 0,
    nst: 0
  }

  constructor(private _courseListService : CourseListService) { }

  ngOnInit() {

  }
  
  // private 

}
