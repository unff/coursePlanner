import { Component, OnInit } from '@angular/core'
import { DragulaService, DragulaModule } from 'ng2-dragula/ng2-dragula'
import { CourseListService } from './course-list.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',"../../node_modules/dragula/dist/dragula.css"],
  providers: [CourseListService]
})

export class AppComponent {
  title: string = 'Bachelor of Computer Science Course Planner'
  debug: boolean = true
  public courses: any = []
  public terms = {
    Courses: [],
  t1Courses: [],
  t2Courses: [],
  t3Courses: [],
  t4Courses: [],
  t5Courses: [],
  t6Courses: [],
  t7Courses: [],
  t8Courses: [],
  t9Courses: [],
  t10Courses: [],
  }
  public spacer: any = []
  
  constructor ( private _dragulaService: DragulaService,
               private _courselistservice: CourseListService) {
    this.terms.Courses = _courselistservice.courses
    this.terms.t1Courses = _courselistservice.t1Courses
    this.terms.t2Courses.push(_courselistservice.spacer)
    this.terms.t3Courses.push(_courselistservice.spacer)
    this.terms.t4Courses.push(_courselistservice.spacer)
    this.terms.t5Courses.push(_courselistservice.spacer)
    this.terms.t6Courses.push(_courselistservice.spacer)
    this.terms.t7Courses.push(_courselistservice.spacer)
    this.terms.t8Courses.push(_courselistservice.spacer)
    this.terms.t9Courses.push(_courselistservice.spacer)
    this.terms.t10Courses.push(_courselistservice.spacer)
  
  }

  ngOnInit() {
    this._dragulaService.setOptions('bag-courses', {
      copy: false,
      moves: (el:any, container:any, handle:any) => {
        this.debugLogger("moves:")
        this.debugLogger(el)
        this.debugLogger(container)
        this.debugLogger(handle)
        return this.isMoveable(el, container.dataset.id)
      }
    })
    this._dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1))
      this.debugLogger("dropModel")
      this.debugLogger(value)
    })

    this._dragulaService.removeModel.subscribe((value) => {
      this.onRemoveModel(value.slice(1))
    })
    this._dragulaService.drag.subscribe((value) => {
      this.debugLogger(`drag: ${value[0]}`)
      this.onDrag(value.slice(1))
    })
    this._dragulaService.drop.subscribe((value) => {
      this.debugLogger(`drop: ${value[0]}`)
      this.onDrop(value.slice(1))
    })
    this._dragulaService.over.subscribe((value) => {
      this.debugLogger(`over: ${value[0]}`)
      this.onOver(value.slice(1))
    })
    this._dragulaService.out.subscribe((value) => {
      this.debugLogger(`out: ${value}`)
      this.onOut(value.slice(1))
    })
  }

  private onDrag(args) {
  let [e, el] = args
  // do something
  }
  
  private onDrop(args) {
    let [e, el] = args
    // do something
  }
  
  private onOver(args) {
    let [e, el, container] = args
    this.debugLogger(args)
  }
  
  private onOut(args) {
    let [e, el, container] = args
    this.debugLogger(args)
  }


  private onDropModel(args) {
    let [el, target, source] = args
    // do something else
    this.debugLogger("onDropModel:")
    this.debugLogger(source)
    if (this.terms[target.dataset.id].length > 2) {
      this.terms[target.dataset.id] = this.terms[target.dataset.id].filter(c => c.prefix != 'spacer')
    }
    if (this.terms[source.dataset.id].length < 2) {
      this.terms[source.dataset.id] = this.terms[source.dataset.id].filter(c => c.prefix != 'spacer')
      this.terms[source.dataset.id].push(this._courselistservice.spacer)
    }
  }

  private onRemoveModel(args) {
    let [el, source] = args
    // do something else
  }

  private isMoveable(el, model) {
    if (el.classList.contains('spacer')) return false;
    // get pre-req code from DOM. don't judge me.
    let preReq = el.getElementsByClassName("footCenter")[0].innerText
    let unusedCourses = this.terms.Courses.map(e => {return e.code})
    if (unusedCourses.includes(preReq)) return false
    return true;
  }

  // need a function to remove courses with unmet pre-reqs
  // from the left if the prereq gets removed

  private debugLogger(message: any) {
    if (this.debug) {
      console.log(message)
    }
  }
}
