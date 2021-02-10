import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-search',
  templateUrl: './todo-search.component.html',
})
export class TodoSearchComponent implements OnInit {
  @Output() typing = new EventEmitter();

  show: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
