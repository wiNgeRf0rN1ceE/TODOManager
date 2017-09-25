import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoGroupsComponent } from './todo-groups.component';

describe('TodoGroupsComponent', () => {
  let component: TodoGroupsComponent;
  let fixture: ComponentFixture<TodoGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
