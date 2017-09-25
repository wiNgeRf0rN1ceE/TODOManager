import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { TodoService } from '../../services'; 

@Component({
  selector: 'app-todo-groups',
  templateUrl: './todo-groups.component.html',
  styleUrls: ['./todo-groups.component.scss']
})
export class TodoGroupsComponent implements OnInit {

  @Input() private groupList: any;
  @Output() private actionGroup = new EventEmitter<any>();
  @Output() private byGroup = new EventEmitter<any>();

  private viewStatus: boolean = false;
  private isEdit: boolean = false;
  private createForm: FormGroup;
  private editForm: FormGroup;
  private groupId;

  private selectedItem: any;
  constructor(
    private fb: FormBuilder, private todoService: TodoService,
    private router: Router
  ) {
    this.createForm = this.fb.group({
      title: ['', Validators.required]
    });

   }

  ngOnInit() {
  }

  public viewEdit(item) {
    this.selectedItem = item;
    this.byGroup.emit(item._id);
    this.router.navigate(['/group', item._id]);
    console.log('click on' + item._id );
  }

  public removeGroup(item: any) {
    const id = item._id
    return this.todoService.removeGroup(id).subscribe(res => this.actionGroup.emit(res))
  }

  public actionEdit(item: any) {
    this.groupId = item._id;
    this.editForm = this.fb.group({
      title: [item.title, Validators.required]
    });
    console.dir('Group = ' + item);
  }

  public editGroup() {
    const title = this.editForm.value['title'];
    return this.todoService.editGroup(this.groupId, title).subscribe(res => {
      this.actionGroup.emit(res);
      this.groupId = '';
    })
  }

  public actionUndo() {
    this.groupId = '';
  }
  

  public createGroup() {
    const title = this.createForm.value['title']
    return this.todoService.createGroup(title)
      .subscribe(res => this.actionGroup.emit(res))
  }

}
