import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';


const app_routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/todos' },
  { path: 'todos', loadChildren: 'app/todos/todos.module#TodosModule'},
  { path: '**', pathMatch:'full', redirectTo: '/todos' } //catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }