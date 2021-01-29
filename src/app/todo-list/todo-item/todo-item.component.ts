import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements OnInit {
  @Input() task: Task;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  show = false;

  constructor() {}

  ngOnInit(): void {}

  editTask() {
    this.edit.emit();
  }
}
