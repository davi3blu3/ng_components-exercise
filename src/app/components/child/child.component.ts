import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parVar;
  chiVar = '';
  granVar = '';

  @Output() varEmit: EventEmitter<Object> = new EventEmitter;

  constructor() {}

  ngOnInit() {
  }

  sendVar() {
    this.varEmit.emit({body: this.chiVar, origin: 'child'});
  }

  receive(granVar) {
    this.granVar = granVar;
    this.varEmit.emit({body: granVar, origin: 'grand'});
  }

}
