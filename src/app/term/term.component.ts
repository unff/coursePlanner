import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component'
import { CourseListService } from '../course-list.service'

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css',"../../../node_modules/dragula/dist/dragula.css"]
})
export class TermComponent implements OnInit {
  @Input() title: string;
  @Input() dataModel: any;
  @Input() modelID: string;
  constructor(private _courselistservice: CourseListService) {
    // console.log('constructor')
    // console.log(this.dataModel)
   }

  ngOnInit() {}

}
