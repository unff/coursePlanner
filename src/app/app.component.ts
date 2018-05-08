import { Component } from '@angular/core';
import { DragulaService, DragulaModule } from 'ng2-dragula/ng2-dragula';
import { CourseListService } from './course-list.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',"../../node_modules/dragula/dist/dragula.css"],
  providers: [CourseListService, DragulaService]
})
export class AppComponent {
  title: string = 'Course Planner';
  public courses: any = [];
  public usedCourses: any = []
  // options: any = {
  //   removeOnSpill: true
  // }
  constructor (private _dragulaService: DragulaService, 
               private _courselistservice: CourseListService) {
    this.courses = _courselistservice.courses;

    _dragulaService.setOptions('bag-courses', {
      copy: false,
      moves: (el:any, container:any, handle:any) => {
        return el.classList.contains('foundation')? false : true;
      }
    })

    _dragulaService.drop.subscribe(value => {
      const [bagName, e, el] = value;
      console.log("drop")
      console.log(value)
    })

    _dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1))
      console.log("dropModel")
      console.log(value)
      console.log(this.usedCourses)
      console.log("sliced")
      console.log(value.slice(1))
    })

    _dragulaService.removeModel.subscribe((value) => {
      this.onRemoveModel(value.slice(1))
    })
    // _dragulaService.over.subscribe((v) => {console.log(v)})
  }
  private onDropModel(args) {
    let [el, target, source] = args;
    // do something else
    console.log("onDropModel")
    console.log(args)

    

  }

  private onRemoveModel(args) {
    let [el, source] = args;
    // do something else
    console.log("onRemoveModel")
    console.log(args)
  }
}
