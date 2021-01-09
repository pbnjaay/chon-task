import { Component, OnInit } from '@angular/core';
import { Item } from './todo-item/todo-item.component';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  items: Item[] = [];
  itemsTodisplay: Item[];

  constructor(private todoService: TodoService) {}

  deleteItem(item: Item) {
    this.todoService.deletItem(item.id).subscribe((res) => {
      let i = this.items.indexOf(item);
      this.items.splice(i, 1);
    });
  }

  editItem(item: Item) {
    this.todoService.updateItem(item).subscribe();
  }

  addItem(e: Item) {
    this.todoService.addItem(e).subscribe((res: Item) => this.items.push(res));
  }

  listAllItem() {
    this.itemsTodisplay = this.items;
  }

  listActiveItem() {
    this.itemsTodisplay = this.items.filter((i) => i.completed === false);
  }

  listCompletedItem() {
    this.itemsTodisplay = this.items.filter((i) => i.completed === true);
  }

  ngOnInit(): void {
    this.getAllItem();
    this.listActiveItem();
  }

  private getAllItem() {
    this.todoService
      .getAllItem()
      .subscribe((res: Item[]) => (this.itemsTodisplay = this.items = res));
  }
}
