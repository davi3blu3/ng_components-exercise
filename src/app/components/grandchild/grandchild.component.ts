import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {

  @Input() parVar;
  @Input() chiVar;
  granVar = '';

  @Output() varEmit: EventEmitter<string> = new EventEmitter;


  constructor() { }

  ngOnInit() {
  }

  sendVar() {
    this.varEmit.emit(this.granVar);
  }

}
