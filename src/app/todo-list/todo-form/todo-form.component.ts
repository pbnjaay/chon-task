import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
})
export class TodoFormComponent implements OnInit {
  @Output() add = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addItem(form: NgForm) {
    this.add.emit({ todo: form.value.todo, completed: false });
    form.reset();
  }
}
