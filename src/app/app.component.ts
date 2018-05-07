import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { CourseListService } from './course-list.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',"../../node_modules/dragula/dist/dragula.css"],
  providers: [CourseListService]
})
export class AppComponent {
  title = 'testing Dragula';
  courses = [];
  // options: any = {
  //   removeOnSpill: true
  // }
  constructor (private _dragulaService: DragulaService, 
               private _courselistservice: CourseListService) {
    this.courses = _courselistservice.courses;
    _dragulaService.setOptions('bag-task1', {
      copy: true
    })
  }
}
