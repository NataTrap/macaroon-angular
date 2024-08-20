import {Component, Input, OnInit} from '@angular/core';
import {PriorityType} from "../../type/priority.type";

@Component({
  selector: 'priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss']
})
export class PriorityComponent implements OnInit {

  @Input() priority: PriorityType;

  constructor() {
    this.priority = {
      number: '',
      title: '',
      description: ''
    }
  }

  ngOnInit(): void {
  }

}
