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
  subtitle: string = ''
  debug: boolean = true
   
  constructor ( private _dragulaService: DragulaService,
               private _courselistservice: CourseListService) {
  }

  ngOnInit() {
    this._dragulaService.setOptions('bag-courses', {
      copy: false,
      moves: (el:any, container:any, handle:any) => {
        this.debugLogger("moves:")
        this.debugLogger(el)
        this.debugLogger(container)
        this.debugLogger(handle)
        return this.isMoveable(el)
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
    if (this._courselistservice.terms[target.dataset.id].length > 2) {
      this._courselistservice.terms[target.dataset.id] = this._courselistservice.terms[target.dataset.id]
        .filter(c => c.prefix != 'spacer')
    }
    if (this._courselistservice.terms[source.dataset.id].length < 2) {
      this._courselistservice.terms[source.dataset.id] = this._courselistservice.terms[source.dataset.id]
        .filter(c => c.prefix != 'spacer')
      this._courselistservice.terms[source.dataset.id].push(this._courselistservice.spacer)
    }
  }

  private onRemoveModel(args) {
    let [el, source] = args
    // do something else
  }

  private isMoveable(el) {
    console.log("app.isMoveable:")
    console.log(el)
    if (el.classList.contains('spacer')) return false;
    // get pre-req code from DOM. don't judge me.
    let preReq = el.getElementsByClassName("footCenter")[0].innerText
    let unusedCourses = this._courselistservice.terms.Courses.map(e => {return e.code})
    if (unusedCourses.includes(preReq)) {
      return false
    }
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
