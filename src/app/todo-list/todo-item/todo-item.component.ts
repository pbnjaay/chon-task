import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input('item') item: Item;
  @Output('delete') delete = new EventEmitter();
  @Output('edit') edit = new EventEmitter();

  isShow = false;

  constructor(private todoService: TodoService) {}

  editItem() {
    this.edit.emit();
  }

  ngOnInit(): void {}
}

export interface Item {
  id: number;
  todo: string;
  completed: boolean;
}
