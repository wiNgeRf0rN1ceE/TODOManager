import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { RouteReuseStrategy} from '@angular/router';

import { TodosComponent } from './todos.component';
import { TodoListComponent, TodoGroupsComponent } from './components/index';


// import { DropdownModule } from 'ngx-dropdown';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// PrimeNG
import { ButtonModule, SplitButtonModule} from 'primeng/primeng';


import { TodoService } from './services/index';

import { TodosRoutingModule } from './todos-routing.module';

@NgModule({
  imports: [
    CommonModule, TodosRoutingModule, HttpModule, FormsModule, ReactiveFormsModule,
    ButtonModule, SplitButtonModule, NgbModule.forRoot()
  ],
  providers: [ TodoService ],
  declarations: [TodosComponent, TodoListComponent, TodoGroupsComponent]
})
export class TodosModule { }
