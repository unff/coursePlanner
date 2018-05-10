import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css',"../../../node_modules/dragula/dist/dragula.css"]
})
export class TermComponent implements OnInit {
  @Input() title: string;
  @Input() dataModel: any;
  @Input() modelID: string;
  constructor() {
    // console.log('constructor')
    // console.log(this.dataModel)
   }

  ngOnInit() {
    // console.log('onInit')
    // console.log(this.dataModel)
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log("onChanges fired")
    // console.log(changes)
  }

  //Testing for changing class in this thing.  Going to have to move alllll data to a shared service.
  //Like I should have in the first place.
  private isMoveable(el, model) {
    if (el.classList.contains('spacer')) return false;
    // get pre-req code from DOM. don't judge me.
    let preReq = el.getElementsByClassName("footCenter")[0].innerText
    // let unusedCourses = this.terms.Courses.map(e => {return e.code})
    // if (unusedCourses.includes(preReq)) return false
    return true;
  }

}
