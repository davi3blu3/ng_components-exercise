import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parVar = '';
  chiVar: string;
  granVar: string;

  constructor() { }

  ngOnInit() {
  }

  receive(obj) {
    if (obj.origin === 'child') {
      console.log('parent received from child');
      this.chiVar = obj.body;
    } else if (obj.origin === 'grand') {
      console.log('parent received from grand');
      this.granVar = obj.body;
    }
  }

}
