import { Component, OnInit, DoCheck, AfterViewInit, AfterViewChecked } from '@angular/core'
import { DragulaService, DragulaModule } from 'ng2-dragula/ng2-dragula'
import { CourseListService } from './course-list.service'
import autoScroll from 'dom-autoscroller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',"../../node_modules/dragula/dist/dragula.css"],
  providers: [CourseListService]
})

export class AppComponent {
  title: string = 'Bachelor of Computer Science Course Planner'
  subtitle: string = 'Drag from the course list on the right into the terms on the left.'
  debug: boolean = false
  scroll: any
   
  constructor ( private _dragulaService: DragulaService,
               private _courselistservice: CourseListService) {
  }

  ngAfterViewInit() {
    // console.log("ngAfterViewInit()")
    this.unmetPrereq()

  }

  ngOnInit() {
    let t = this._dragulaService  // don't ask.  I'm missing something in scope apparently.

    this._dragulaService.setOptions('bag-courses', {
      copy: false,
      moves: (el:any, container:any, handle:any) => {
        this.debugLogger("moves:")
        this.debugLogger(el)
        this.debugLogger(container)
        this.debugLogger(handle)
        return this.isMoveable(el)
      },
      accepts: (el: any, target: any, source: any, sibling: any) => {
        return this.checkForMax(el, target,source, sibling)
      }
    })
    this._dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1))
      this.debugLogger("dropModel")
      this.debugLogger(value)
      this.unmetPrereq()
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

    this.scroll = autoScroll(
      // can also be an array of elements if they're { overflow: auto; max-height: XXpx } containers.
      // i.e. [someViewChild.nativeElement]
      window,
      {
        margin: 30,
        maxSpeed: 25,
        scrollWhenOutside: true,
          
        autoScroll: function () { // don't use () => {} syntax, we want to keep the 'this'
          // Only scroll when the pointer is down, and there is a child being dragged. 
          // Why the hell wasn't this._dragulaService available here? What don't I know here?
          return t.find('bag-courses').drake.dragging;
        }
      });
  }

  ngDoCheck() {
    //console.log("Do Check!")
  }

  private checkForMax(el, target, source, sibling) {
    console.log("accepts: ")
    // console.log('el: ',el)
    console.log('target: ',target.dataset.id)
    // console.log('source: ',source)
    // console.log('sibling', sibling)
    // SPECIAL CASES
    if (target.dataset.id == 'Courses') return true
    if (target.dataset.id == 't1Courses') return false
    if (target.dataset.id == 't2Courses' && this._courselistservice.terms["t2Courses"]
        .filter(c => c.prefix != 'spacer').length > 1) return false
    // NOT SO SPECIAL CASES
    return this._courselistservice.terms[target.dataset.id].length > 2 ? false : true
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
    // this.debugLogger(args)
    
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
    // console.log("app.isMoveable:")
    // console.log(el)
    if (el.classList.contains('spacer')) return false;
    // get pre-req code from DOM. don't judge me.
    let preReq = el.getElementsByClassName("footCenter")[0].innerText
    let unusedCourses = this._courselistservice.terms.Courses.map(e => {return e.code})
    if (unusedCourses.includes(preReq)) {
      return false
    }
    return true;
  }

  private unmetPrereq() {
    for (let c of this._courselistservice.terms.Courses) {
      if (this._courselistservice.terms.Courses.findIndex(p => p.code == c.prerequisites[0]) > -1){
        let d = document.getElementById(c.id)
        d.classList.add('disabled')
      } else {
        let d = document.getElementById(c.id)
        d.classList.remove('disabled')
      }
    }
  }

  // need a function to remove courses with unmet pre-reqs
  // from the left if the prereq gets removed

  private debugLogger(message: any) {
    if (this.debug) {
      console.log(message)
    }
  }
}
