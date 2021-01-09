import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Output('add') add = new EventEmitter();

  addItem(form: NgForm) {
    form.value.completed = false;
    this.add.emit(form.value);
    form.reset();
  }

  constructor() {}

  ngOnInit(): void {}
}
