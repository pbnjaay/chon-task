import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-filter',
  templateUrl: './todo-filter.component.html',
})
export class TodoFilterComponent implements OnInit {
  @Output() allTask = new EventEmitter();
  @Output() activeTask = new EventEmitter();
  @Output() completedTask = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
