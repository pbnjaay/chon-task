import { Component, OnInit } from '@angular/core';
import { Task } from './Task';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [];
  showedTasks: Task[] = [];
  isUp: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.list().subscribe((response: Task[]) => {
      this.showedTasks = this.tasks = response;
      this.sortDown();
    });
  }

  listAllTask() {
    this.showedTasks = this.tasks;
  }

  listActiveTask() {
    this.showedTasks = this.tasks.filter((i) => i.completed === false);
  }

  listCompletedTask() {
    this.showedTasks = this.tasks.filter((i) => i.completed === true);
  }

  sortDown() {
    this.showedTasks.sort((a, b) => a.todo.localeCompare(b.todo));
    this.isUp = true;
  }

  sortUp() {
    this.showedTasks.sort((a, b) => b.todo.localeCompare(a.todo));
    this.isUp = false;
  }

  search(q: string) {
    this.showedTasks = q
      ? this.showedTasks.filter((tasks) => tasks.todo.includes(q))
      : this.tasks;
  }

  deleteTask(task: Task) {
    this.todoService.delete(task.id).subscribe(() => {
      const i = this.tasks.indexOf(task);
      this.tasks.splice(i, 1);
    });
  }

  editTask(task: Task) {
    this.todoService.update(task).subscribe();
  }

  addTask(task: Task) {
    this.todoService
      .create(task)
      .subscribe((response: Task) => this.tasks.push(response));
  }
}
