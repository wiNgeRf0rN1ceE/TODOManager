import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { TodoService } from '../../services'; 

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  
  @Input() private todoList: any;
  @Input() private test: any;
  @Output() private actionTodo: any = new EventEmitter<any>();
  private taskId: any;
  private editForm: FormGroup;
  private createForm: FormGroup;
  private viewStatus: boolean = false;
  private isPriority: boolean = false;
  private isGroup: boolean = false;
  private red = 'red';
  constructor(
    private fb: FormBuilder, private todoService: TodoService
  ) {
   }

  ngOnInit() {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      priority: ''
    });
  }

  public actionEdit(item) {
    this.taskId = item._id;
    this.editForm = this.fb.group({
      title: [item.title, Validators.required],
      priority: ''
    });
    console.dir('Group = ' + item);
  }

  public removeTask(item) {
    return this.todoService.removeTodo(item._id).subscribe(res => this.actionTodo.emit(res) )
  }

  public editTask() {
  
  }

  public createTask() {
   console.log('eto prioritet = ' + this.createForm.value['priority']);
   const title = this.createForm.value['title']
   const priority = this.createForm.value['priority']
   return this.todoService.createTodo(title, priority).subscribe(res => {
     this.actionTodo.emit(res);
     this.createForm.reset();
     this.viewStatus = !this.viewStatus;
    } )
  }

  public undoCreate() {
    this.viewStatus = !this.viewStatus
  }

  public undoEdited() {
    this.taskId = '';
  }

}
