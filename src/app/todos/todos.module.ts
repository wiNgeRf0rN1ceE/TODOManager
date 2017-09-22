import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { TodosComponent } from './todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoGroupsComponent } from './todo-groups/todo-groups.component';

import { TodoService } from './shared/todo.service';

import { TodosRoutingModule } from './todos-routing.module';

@NgModule({
  imports: [
    CommonModule, TodosRoutingModule, HttpModule
  ],
  providers: [ TodoService ],
  declarations: [TodosComponent, TodoListComponent, TodoGroupsComponent]
})
export class TodosModule { }
