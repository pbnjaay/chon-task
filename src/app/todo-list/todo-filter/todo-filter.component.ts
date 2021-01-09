import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css'],
})
export class TodoFilterComponent implements OnInit {
  @Output('all') all = new EventEmitter();
  @Output('active') active = new EventEmitter();
  @Output('completed') completed = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
