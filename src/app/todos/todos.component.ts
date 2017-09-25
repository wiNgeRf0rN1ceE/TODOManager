import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public todos;
  public groups;
  private isFilter: boolean = false;
  private testText = 'empty';
  private groupId;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    if (this.isFilter) {
      console.log('isfilter = true');
      this.getGroups();
      this.inGroup(this.groupId);
    } else {
    this.getGroups();
    this.getTodos();
    }
  }

  getTodos() {
    return this.todoService.getTodos().subscribe(res => this.todos = res)
  }

  getGroups() {
    return this.todoService.getGroups().subscribe(res => this.groups = res)
  }

  inGroup(id) {
    console.log('ingroup');
    this.isFilter = true;
    this.groupId = id;
    this.testText = id;
    return this.todoService.getTodos().subscribe(res => this.todos = res)
  }


}
