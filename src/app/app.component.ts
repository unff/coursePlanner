import { Component, OnInit } from '@angular/core';
import { DragulaService, DragulaModule } from 'ng2-dragula/ng2-dragula';
import { CourseListService } from './course-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',"../../node_modules/dragula/dist/dragula.css"],
  providers: [CourseListService]
})

export class AppComponent {
  title: string = 'Bachelor of Computer Science Course Planner'
  public courses: any = []
  public t1Courses: any = []
  public t2Courses: any = []
  public t3Courses: any = []
  public t4Courses: any = []
  public t5Courses: any = []
  public t6Courses: any = []
  public t7Courses: any = []
  public t8Courses: any = []
  public t9Courses: any = []
  public t10Courses: any = []
  public spacer: any = []

  constructor ( private _dragulaService: DragulaService,
               private _courselistservice: CourseListService) {
    this.courses = _courselistservice.courses;
    this.t1Courses = _courselistservice.t1Courses;
    this.t2Courses.push(_courselistservice.spacer);
    this.t3Courses.push(_courselistservice.spacer);
    this.t4Courses.push(_courselistservice.spacer);
    this.t5Courses.push(_courselistservice.spacer);
    this.t6Courses.push(_courselistservice.spacer);
    this.t7Courses.push(_courselistservice.spacer);
    this.t8Courses.push(_courselistservice.spacer);
    this.t9Courses.push(_courselistservice.spacer);
    this.t10Courses.push(_courselistservice.spacer);
    // _dragulaService.setOptions('bag-courses', {
    //   copy: false,
    //   moves: (el:any, container:any, handle:any) => {
    //     return el.classList.contains('foundation')? false : true;
    //   }
    // })

    // _dragulaService.drop.subscribe(value => {
    //   const [bagName, e, el] = value;
    // })

    _dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1))
    })

    _dragulaService.removeModel.subscribe((value) => {
      this.onRemoveModel(value.slice(1))
    })
    // _dragulaService.over.subscribe((v) => {console.log(v)})
  }

  ngOnInit() {

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
