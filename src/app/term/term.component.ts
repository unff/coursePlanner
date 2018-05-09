import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

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

}
